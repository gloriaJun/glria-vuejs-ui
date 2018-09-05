### Full Example Code
[![Edit Gvu-Badge](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v8mz66vr47?module=%2Fsrc%2FApp.vue)

### Basic
```jsx
<div>
  <vu-badge color="primary">primary</vu-badge>
  <vu-badge color="secondary">secondary</vu-badge>
  <vu-badge color="info">info</vu-badge>
  <vu-badge color="success">success</vu-badge>
  <vu-badge color="warning">warning</vu-badge>
  <vu-badge color="danger">danger</vu-badge>
  <vu-badge color="light">light</vu-badge>
  <vu-badge color="dark">dark</vu-badge>
</div>
```

##### round
```jsx
<div>
  <vu-badge color="primary" round>primary</vu-badge>
  <vu-badge color="secondary" round>secondary</vu-badge>
  <vu-badge color="info" round>info</vu-badge>
  <vu-badge color="success" round>success</vu-badge>
  <vu-badge color="warning" round>warning</vu-badge>
  <vu-badge color="danger" round>danger</vu-badge>
  <vu-badge color="light" round>light</vu-badge>
  <vu-badge color="dark" round>dark</vu-badge>
</div>
```

### link 
```vue
<template>
  <vu-badge color="primary" link @click=onClick>primary</vu-badge>
</template>

<script>
export default {
  methods: {
   onClick() {
      console.log('click badge');
    },
  },
};
</script>
```
