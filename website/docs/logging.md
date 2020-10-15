---
title: Logging Metrics
---

## Logging metrics

### log

Log a single metric value to a run.

```python
from azureml.core import Run
run = Run.get_context()
run.log('metric-name', metric_value)
```

### log_row

Log a metric with multiple columns

```python
from azureml.core import Run
run = Run.get_context()
run.log_row("Y over X", x=1, y=0.4)
```

## Viewing metrics

### Via the SDK

Viewing metrics in a run (for more details on runs: [Run](run))

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