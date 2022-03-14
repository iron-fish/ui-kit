const fs = require('fs/promises')

const {
  readDir,
  trace,
  chain,
  curry,
  trim,
  fork,
  map,
  pipe,
  readFile,
  F,
} = require('snang/script')

// writeFile :: String -> String -> Future Error String
const writeFile = curry(
  (file, raw) =>
    new F.Future((bad, good) => {
      fs.writeFile(file, raw, 'utf8').catch(bad).then(good)
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {}
    })
)

const ensviggie = raw => {
  const name = raw.slice(0, raw.lastIndexOf('.'))
  return pipe(
    readDir,
    map(
      map(
        pipe(
          trim,
          y =>
            `import React from 'react'\nexport function SVG() {\n  return (${y})\n}\n\nexport default SVG`
        )
      ),
      chain(writeFile(name + '.tsx'))
    ),
    // eslint-disable-next-line no-console
    fork(console.error, console.log)
  )(raw)
}

ensviggie(process.argv.slice(2)[0])
