---
title: 'Azure ML Docker Build'
---

In this post we explain how Azure ML builds its docker image based on an `Environment`.

For some background: [Environment](environment)

## Build Azure ML Docker Image from an environment

Suppose you create an environment - in this example we will work with Conda:

```yml title="env.yml"
name: pytorch
channels:
    - defaults
    - pytorch
dependencies:
    - python=3.7
    - pytorch
    - torchvision
```

We can create and register this as an `Environment` in our workspace `ws` as follows:

```python
from azureml.core import Environment
env = Environment.from_conda_specification('pytorch', 'env.yml')
env.register(ws)
```

In order to consume this environment in, say, a remote run, Azure ML creates a docker image
that creates the corresponding python environment.

You can replicate the process by which this image is created as follows:

```python
build = env.build_local(ws, useDocker=True, pushImageToWorkspaceAcr=True)
```

This will build the Docker image from your environment locally. The first line output will be
of the form

```console
Saving setup content into /tmp/tmpmaul3d0t
```

If we take a look in that directory we will see two interesting files:

- `Dockerfile` : used to build the image
- `mutated_conda_dependencies.yml` : a modified version of `env.yml`

First the contents of the Dockerfile:

```docker title="Dockerfile" {7-12}
FROM mcr.microsoft.com/azureml/intelmpi2018.3-ubuntu16.04:20200821.v1@sha256:8cee6f674276dddb23068d2710da7f7f95b119412cc482675ac79ba45a4acf99
USER root
RUN mkdir -p $HOME/.cache
WORKDIR /
COPY azureml-environment-setup/99brokenproxy /etc/apt/apt.conf.d/
RUN if dpkg --compare-versions `conda --version | grep -oE '[^ ]+$'` lt 4.4.11; then conda install conda==4.4.11; fi
COPY azureml-environment-setup/mutated_conda_dependencies.yml azureml-environment-setup/mutated_conda_dependencies.yml
RUN ldconfig /usr/local/cuda/lib64/stubs && conda env create -p /azureml-envs/azureml_7459a71437df47401c6a369f49fbbdb6 -
f azureml-environment-setup/mutated_conda_dependencies.yml && rm -rf "$HOME/.cache/pip" && conda clean -aqy && CONDA_ROO
T_DIR=$(conda info --root) && rm -rf "$CONDA_ROOT_DIR/pkgs" && find "$CONDA_ROOT_DIR" -type d -name __pycache__ -exec rm
 -rf {} + && ldconfig
# AzureML Conda environment name: azureml_7459a71437df47401c6a369f49fbbdb6
ENV PATH /azureml-envs/azureml_7459a71437df47401c6a369f49fbbdb6/bin:$PATH
ENV AZUREML_CONDA_ENVIRONMENT_PATH /azureml-envs/azureml_7459a71437df47401c6a369f49fbbdb6
ENV LD_LIBRARY_PATH /azureml-envs/azureml_7459a71437df47401c6a369f49fbbdb6/lib:$LD_LIBRARY_PATH
COPY azureml-environment-setup/spark_cache.py azureml-environment-setup/log4j.properties /azureml-environment-setup/
RUN if [ $SPARK_HOME ]; then /bin/bash -c '$SPARK_HOME/bin/spark-submit  /azureml-environment-setup/spark_cache.py'; fi
ENV AZUREML_ENVIRONMENT_IMAGE True
CMD ["bash"]
```

The highlighted lines copy the `mutated_conda_dependencies.yml` and then use `conda env create -f` to create the environment.

```yml title="mutated_conda_dependencies.yml"
channels:
    - defaults
    - pytorch
dependencies:
    - python=3.7
    - pytorch
    - torchvision
name: azureml_7459a71437df47401c6a369f49fbbdb6
```

We see that this is identical to `env.yml` with the exception of the environment name.

**TODO: Is this always the case?**