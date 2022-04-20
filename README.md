# UI Kit

This repo is the Iron Fish UI Kit. It has reusable visual building blocks which are currently used further downstream in:

- [Block Explorer v.2](https://github.com/iron-fish/block-explorer-v2)
- The forthcoming Wallet

## Getting Started

`npm run dev`
_or_
`yarn dev`
_or_
`nps dev`

This will launch Storybook server with styled components examples on http://localhost:5000 where all available component can be tested and configured.


## Development

_Optional_  - Run `npx husky install` in order to set up your git hooks locally.

## Scripts

    Add `nps` using either `yarn global add nps` or `npm i nps -g`
    Run `nps` for a list of scripts to run in the repo.

## Commit Hooks

By default we run a precommit hook which runs nps care. If needed, you can avoid this hook by adding a --no-verify flag, e.g. `git commit -m "cool" --no-verify`

## Review Process

1. New PRs should point at `staging`.
2. When we want to do a release to production, we should open a PR to merge `staging` into `master`.
   - For these PRs, please add a [Needs Design Review Label](https://github.com/iron-fish/ui-kit/labels/%F0%9F%94%8D%20Needs%20Design%20Review) and tag `@skylarrichard123` for review.
3. Once the release branch has been reviewed, either:
   a. There are fixes needed - open new PRs and point them at the release branch
   b. There are no fixes needed - Remove the *Needs Design Review* label and add the [Designer Approved Label](https://github.com/iron-fish/ui-kit/labels/%E2%9C%94%EF%B8%8FDesigner%20Approved)

