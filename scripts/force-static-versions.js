#!/usr/bin/env node

const fs = require('fs/promises')
const path = require('path')
const {
  F,
  addIndex,
  always,
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
  map,
  merge,
  of,
  pipe,
  prop,
  readFile,
  reduce,
  toPairs,
  unless,
} = require('snang/script')

const PKG = path.resolve(__dirname, '../package.json')

const CMD = `force-static-versions `

// writeFile :: String -> String -> Future Error String
const writeFile = curry(
  (file, raw) =>
    new F.Future((bad, good) => {
      fs.writeFile(file, raw, 'utf8').catch(bad).then(good)
      return () => {}
    })
)

const SKIP_DEPENDENCIES = ['@babel/core']
// testExcluded :: List String -> List String
const testExcluded = flip(includes)(SKIP_DEPENDENCIES)

// skip the first item in an array
const unenforced = pipe(head, testExcluded)

// writeToPackage :: String -> Future Error String
const writeToPackage = pipe(
  writeFile(PKG),
  // F.mapRej(always(`${CMD} 😭 Broken!`)),
  map(always(`${CMD} ⚡️🧹 Fixed!`))
)

// decimalsOnly :: String -> String
const decimalsOnly = v => v.replace(/[^\.\s\d]/, '')

// mash :: Record a -> List Record a -> Record a
const mash = reduce((agg, x) => merge(agg, x))

// mapNth :: (a -> a) -> Number -> List a -> List a
const mapNth = curry((fn, n, xs) =>
  addIndex(map)((x, i) => (i === n ? fn(x) : x))(xs)
)

// makeStatic :: Record String -> List <String, String> -> String
const makeStatic = (raw, deps) =>
  pipe(
    map(
      pipe(
        toPairs,
        // equivalent to
        // .map(([k, v]) => !unenforced([k, v]) ? [k, decimalsOnly(v)] : [k, v]
        // map(unless(unenforced, ([k2, v]) => [k2, decimalsOnly(v)])),
        map(unless(unenforced, mapNth(decimalsOnly, 1))),
        fromPairs
      )
    ),
    of,
    mash(raw),
    j2
  )(deps)

const safeParse = x =>
  new F.Future((bad, good) => {
    try {
      good(JSON.parse(x))
    } catch (e) {
      if (/Unexpected end of JSON input/.test(e.message)) {
        bad(`${CMD} 🗄 😭 ${PKG} is malformed.`)
      } else {
        bad(e)
      }
    }
    return () => {}
  })

module.exports = pipe(
  // take a path
  readFile,
  chain(safeParse),
  // return a Future of path
  // which requires mapping over in order to manipulate the internal value
  map(
    pipe(
      // ifElse(
      //   pipe(length, equals(0)),
      //   () => F.reject('Invalid package.json'),
      pipe(
        // always remember to `of` when you `ap`
        of,
        // apply a value to multiple transformations
        ap([I, prop('dependencies'), prop('devDependencies')]),
        // or in the case of the first value, the identity of readFile(path)
        ([raw, dependencies, devDependencies]) =>
          makeStatic(raw, { dependencies, devDependencies })
      )
      // )
    )
  ),
  // map(trace('raw')),
  // because writeToPackage returns a Future also, we need to wrap this with `chain` in order to combine futures
  chain(writeToPackage),
  fork(console.error, console.log)
)(PKG)
