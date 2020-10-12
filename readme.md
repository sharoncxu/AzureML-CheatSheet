## tmp/ Tech Review

- [ ] Create version
    - [ ] Add version selector
- [ ] Add snippets:
    - [ ] To github
    - [ ] Page in website
- [ ] Add contributors guide
- [ ] Add Alex's example of "setup" in dockerfile and download data
- [ ] Clean up TODOs
- [ ] Github
    - [ ] Push to ghpages branch
    - [ ] Push docusaursu branch to master

## Contribution Guide

**TODO** Finish this guide!

- Install npm

- `cd website` + `yarn start`

- Deploy to GH Pages: https://v2.docusaurus.io/docs/deployment#deploying-to-github-pages

## Adding Snippets

1. Add useful snippets to the `snippets.json` file.
2. Document the new snippets in the `vs-code-snippets/snippets.md` file. For large changes to the snippets file
we provide a `snippets-parser.py` script that automatically converts `snippets.json` into markdown format.
3. Submit your proposed changes via a PR for review.