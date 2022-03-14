const { curry, F } = require('snang/script')
const fs = require('fs/promises')

// writeFile :: String -> String -> Future Error String
const writeFile = curry(
  (file, raw) =>
    new F.Future((bad, good) => {
      fs.writeFile(file, raw, 'utf8').catch(bad).then(good)
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {}
    })
)

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
    // eslint-disable-next-line
    return () => {}
  })

module.exports = { writeFile, safeParse }
