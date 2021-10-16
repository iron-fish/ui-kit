const PORT = process.env.PORT || 5000

module.exports = {
  scripts: {
    dev: {
      script: `next dev -p ${PORT}`,
      description: `runs on ${PORT} by default`,
    },
    build: 'next build',
    start: 'next start',
    lint: 'next lint',
    precommit: 'nps care',
    care: 'nps build lint',
    dry: 'twly --boring --lines 3',
  },
}
