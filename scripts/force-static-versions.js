#!/usr/bin/env node

const fs = require('fs/promises')
const path = require('path')
const {
  F,
  always,
  any,
  ap,
  chain,
  curry,
  flip,
  fork,
  fromPairs,
  head,
  identity: I,
  includes,
  j2,
  trace,
  map,
  merge,
  of,
  pipe,
  prepend,
  prop,
  readFile,
  reduce,
  toPairs,
  unless,
} = require('snang/script')

const PKG = path.resolve(__dirname, '../package.json')

const writeFile = curry(
  (file, raw) =>
    new F.Future((bad, good) => {
      fs.writeFile(file, raw, 'utf8').catch(bad).then(good)
      return () => {}
    })
)

const SKIP_DEPENDENCIES = ['@babel/core']
const skip = flip(includes)(SKIP_DEPENDENCIES)

// skip the first item in an array
const skippable = pipe(head, skip)

const writeToPackage = pipe(
  writeFile(PKG),
  F.mapRej(always('😭 Broken!')),
  map(always('⚡️ Fixed!'))
)

const excludeNonDecimals = v => v.replace(/[^\.\s\d]/, '')

const mash = reduce((agg, x) => merge(agg, x))

const makeStatic = (raw, deps) =>
  pipe(
    map(
      pipe(
        toPairs,
        // equivalent to
        // .map(([k, v]) => !skippable([k, v]) ? [k, excludeNonDecimals(v)] : [k, v]
        map(unless(skippable, ([k2, v]) => [k2, excludeNonDecimals(v)])),
        fromPairs
      )
    ),
    of,
    mash(raw),
    j2
  )(deps)

module.exports = pipe(
  // take a path
  readFile,
  // return a Future<readFile(path)>
  // which requires mapping over in order to manipulate
  map(
    pipe(
      JSON.parse,
      // always remember to `of` when you `ap`
      of,
      // apply a value to multiple transformations
      ap([I, prop('dependencies'), prop('devDependencies')]),
      // or in the case of the first value, the identity of readFile(path)
      ([raw, dependencies, devDependencies]) =>
        makeStatic(raw, { dependencies, devDependencies })
    )
  ),
  // because writeToPackage returns a Future also, we need to wrap this with `chain` in order to combine futures
  chain(writeToPackage),
  fork(console.error, console.log)
)(PKG)
