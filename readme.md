## Contribution Guide

- Install npm and yarn: see [docusaurus2 webpage](https://v2.docusaurus.io/docs/installation)

- First time Docusaurus2 installation
    ```
    cd website
    npm install
    ```

- Run local server while developing:
    ```
    cd website
    yarn start
    ```

    - Build: `yarn run build`
    - Deploy: `GIT_USER=<GITHUB_USERNAME> yarn deploy`
    - More details: https://v2.docusaurus.io/docs/deployment#deploying-to-github-pages

## Adding Snippets

1. Add useful snippets to the `snippets.json` file.
2. Document the new snippets in the `vs-code-snippets/snippets.md` file. For large changes to the snippets file
we provide a `snippets-parser.py` script that automatically converts `snippets.json` into markdown format.
3. Submit your proposed changes via a PR for review.

