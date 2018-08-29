### Full Example Code
[![Edit Gvu-Progress](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/04965jrxyp?module=%2Fsrc%2FApp.vue)

### Basic
```vue
<div>
  <vu-progress color="primary" :value=30></vu-progress>
  <vu-progress color="secondary" :value=50></vu-progress>
  <vu-progress color="info" :value=70></vu-progress>
  <vu-progress color="success" :value=20></vu-progress>
  <vu-progress color="warning" :value=90></vu-progress>
  <vu-progress color="danger" :value=10></vu-progress>
  <vu-progress color="light" :value=25></vu-progress>
  <vu-progress color="dark" :value=48></vu-progress>
</div>
```

### striped
```vue
<div>
  <vu-progress color="primary" :value=30 striped></vu-progress>
  <vu-progress color="secondary" :value=50 striped></vu-progress>
  <vu-progress color="info" :value=70 striped></vu-progress>
  <vu-progress color="success" :value=20 striped></vu-progress>
  <vu-progress color="warning" :value=90 striped></vu-progress>
  <vu-progress color="danger" :value=10 striped></vu-progress>
  <vu-progress color="light" :value=25 striped></vu-progress>
  <vu-progress color="dark" :value=48 striped></vu-progress>
</div>
```

### Show Value 
```vue
<div>
  <vu-progress color="primary" :value=30 show-value></vu-progress>
  <vu-progress color="success" :value=60 striped show-value></vu-progress>
</div>
```
