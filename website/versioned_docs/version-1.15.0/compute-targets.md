---
title: Compute Target
---

Compute targets are an AML abstraction around the concept of a compute resource.
This can range from your local machine to a cluster of Azure VMs.

### Get Compute Target

To get an existing compute target within a workspace `ws`:

```python
from azureml.core import ComputeTarget
target = ComputeTarget(ws, '<compute_target_name>')
```

### List Existing Compute Targets

To get a list of compute targets within a workspace `ws`

```python
ComputeTarget.list(ws): List[ComputeTarget]
```

### Check availabilty

A very common task - especially if you are sharing a workspace within a team - is
to check the compute resources available within a workspace `ws` prior to submitting
a job.

The easiest way to do this is via the studio.

![](img/compute-target.png)