This is a library with customized [chakra-ui](https://chakra-ui.com/) components.

## Getting Started

1. Install dependencies: `yarn`
2. Install optional dependencies: `yarn global add nps`
3. See scripts by running `nps` or `./node_modules/.bin/nps`:
   - `nps dev` - Run Storybook locally
   - `nps build` - Build Storybook and the TypeScript project for deployment
   - `nps lint` - Core Linting
   - `nps meta` - Build a visualization of the codebase
   - `nps test` - Run tests
   - `nps care` - Auto-run on commit-hook

## Releases

Our releases are based on tags. In order to do a release:

1. Update `package.json` version, submit a PR and merge it to `master`.
2. Run `git tag -a "vX.Y.Z" -m "ui-kit@X.Y.Z"` where X.Y.Z is the major.minor.patch version.
3. Run `git push --tags`

## Local Development

Running `nps dev` will launch [storybook](https://storybook.js.org/) server with components examples on [http://localhost:5000](http://localhost:5000)
where all available component can be tested and configured.

## Learn More

- [Chakra-ui documentation](https://chakra-ui.com/guides/first-steps).
- [Storybook documentation](https://storybook.js.org/docs/react/get-started/introduction).


