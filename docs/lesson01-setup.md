# Lesson 1 - Setup

High level description...

By the end of the lesson you will...

Pre-requesits:...

## Register your AML Workspace

Put some words here...

## Azure ML Python SDK

The Azure ML Python SDK is a Python library used to interact with AML.

=== "Pip"
    Simply run:
    ```bash
    pip install --upgrade azureml-sdk
    ```
    Go [here](https://docs.microsoft.com/en-us/python/api/overview/azure/ml/install?view=azure-ml-py) for more details on installing the AzureML Python SDK.
=== "Conda"
    Create an `env.yml` file
    ```yml
    name: aml-blitz

    channels:
        - defaults
        - conda-forge

    dependencies:
        - python=3.6
        - pip
        - pip:
            - azureml-sdk
    ```
    and run
    ```bash
    conda env create -f env.yml
    ```
    Go [here](https://docs.microsoft.com/en-us/python/api/overview/azure/ml/install?view=azure-ml-py) for more details on installing the AzureML Python SDK.
=== "Docker"
    Should we provide a docker image?  

    Go [here](https://docs.microsoft.com/en-us/python/api/overview/azure/ml/install?view=azure-ml-py) for more details on installing the AzureML Python SDK.

## Create Compute

Put words here...