const PORT = process.env.PORT || 5000

module.exports = {
  scripts: {
    dev: {
      script: `next dev -p ${PORT}`,
      description: `runs on ${PORT} by default`,
    },
    bureaucracy: {
      enforceStaticVersions: `node scripts/force-static-versions.js`,
    },
    build: 'next build',
    start: 'next start',
    lint: 'next lint',
    precommit: 'nps care',
    care: 'nps build lint',
    dry: 'twly --boring --lines 3',
  },
}
