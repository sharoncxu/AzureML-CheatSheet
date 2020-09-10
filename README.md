# AzureML-CheatSheet
Cheat sheet for using AzureML

## Notes for Contributors

#### Conda Virtual Environment

Build the conda environment:

```bash
conda env create -f env.yml
```

To activate this environment run:

```bash
conda activate cheatsheet
```

#### MkDocs Server

We are using mkdocs as a static site generator. To run a local mkdocs server:

```bash
mkdocs serve
```

Note: make sure you have activated the `cheatsheet` conda environment.

You should see something like

```bash
Browser Connected: http://127.0.0.1:8000/
```

Visit that site to see your docs. This site will reflect the changes made to your docs
in real time.

For more details on mkdocs see their documentation: https://www.mkdocs.org/