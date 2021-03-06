const { rimraf, concurrent } = require('nps-utils')
const PORT = process.env.PORT || 5000

const folders = ['components', 'hooks', 'public', 'styles', 'svg', 'utils']

module.exports = {
  scripts: {
    dev: {
      build: `build-storybook`,
      custom: `start-storybook`,
      script: `nps "dev.custom -p ${PORT}"`,
      description: `runs on ${PORT} by default`,
    },
    bureaucracy: {
      description: 'Automatically fix some pain points',
      script: 'nps bureaucracy.enforceStaticVersions',
      enforceStaticVersions: `node scripts/force-static-versions.js`,
    },
    lint: {
      description: 'lint and keep things DRY',
      script: concurrent.nps('lint.core', 'lint.dry'),
      core: 'eslint --fix .',
      dry: 'twly --boring --lines 3',
    },
    meta: {
      description: 'build a reference image of the codebase',
      script: 'nps meta.dep',
      log: `gitparty`,
      dependencies: {
        build: `depcruise -c .dependency-cruiser.js -T dot ${folders.join(
          ' '
        )} --progress -x node_modules | dot -T svg > dependency-graph.svg`,
        interactive: `cat dependency-graph.svg | depcruise-wrap-stream-in-html > dependency-graph.html`,
        script: 'nps meta.dep.build meta.dep.interactive',
      },
    },
    build: {
      description: 'build the codebase with tsc',
      clean: rimraf('dist'),
      tsc: 'tsc --project tsconfig.json',
      alias: 'tsc-alias --project tsconfig.json',
      script: 'nps build.clean build.tsc build.alias',
    },
    test: {
      description: 'test things',
      script: 'jest',
      watch: 'nps "test --watch"',
      snapshot: 'nps "test -u"',
    },
    precommit: 'nps care',
    care: concurrent.nps('lint', 'bureaucracy'),
    dx: concurrent.nps('lint', 'bureaucracy', 'meta'),
  },
}
