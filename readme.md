## TODO

- Pipelines: basic page, how to use datasets with pipelines, environments with pipelines, ...
- Use DataReference examples (cannot use with ScriptRunConfig via arguments)


## Contribution Guide

- Install npm (see [requirements](https://v2.docusaurus.io/docs/installation#requirements))

- Clone this repo

- (First time only) Install dependencies by running `yarn install` from within `website` directory. You should see a `node_modules` directory appear.

- Start a local server with `yarn start` (again from within the `website` directory)

- Deploy to GH Pages: https://v2.docusaurus.io/docs/deployment#deploying-to-github-pages

## Adding Snippets

1. Add useful snippets to the `snippets.json` file.
2. Document the new snippets in the `vs-code-snippets/snippets.md` file. For large changes to the snippets file
we provide a `snippets-parser.py` script that automatically converts `snippets.json` into markdown format.
3. Submit your proposed changes via a PR for review.