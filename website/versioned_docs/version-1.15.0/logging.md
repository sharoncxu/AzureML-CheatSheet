---
title: Logging Metrics
---

### Logging metrics

To log metrics in your running script add the following:

```python
from azureml.core import Run
run = Run.get_context()
run.log('metric-name', metric_value)
```

### Viewing metrics with the Python SDK

Viewing metrics in a run

```python
metrics = run.get_metrics()
# metrics is of type Dict[str, List[float]] mapping mertic names
# to a list of the values for that metric in the given run.

metrics.get('metric-name')
# list of metrics in the order they were recorded
```

To view all recorded values for a given metric `my-metric` in a
given experiment `my-experiment`:

```python
experiments = ws.experiments
# of type Dict[str, Experiment] mapping experiment names the
# corresponding Experiment

exp = experiments['my-experiment']
for run in exp.get_runs():
    metrics = run.get_metrics()
    
    my_metric = metrics.get('my-metric')
    if my_metric:
        print(my_metric)
```