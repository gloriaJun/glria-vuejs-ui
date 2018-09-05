### Full Example Code
[![Edit Gvu-tag](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v8mz66vr47?module=%2Fsrc%2FApp.vue)

### Basic
```jsx
<div>
  <vu-tag color="primary">primary</vu-tag>
  <vu-tag color="secondary">secondary</vu-tag>
  <vu-tag color="info">info</vu-tag>
  <vu-tag color="success">success</vu-tag>
  <vu-tag color="warning">warning</vu-tag>
  <vu-tag color="danger">danger</vu-tag>
  <vu-tag color="light">light</vu-tag>
  <vu-tag color="dark">dark</vu-tag>
</div>
```

##### round
```jsx
<div>
  <vu-tag color="primary" round>primary</vu-tag>
  <vu-tag color="secondary" round>secondary</vu-tag>
  <vu-tag color="info" round>info</vu-tag>
  <vu-tag color="success" round>success</vu-tag>
  <vu-tag color="warning" round>warning</vu-tag>
  <vu-tag color="danger" round>danger</vu-tag>
  <vu-tag color="light" round>light</vu-tag>
  <vu-tag color="dark" round>dark</vu-tag>
</div>
```

### link 
```vue
<template>
  <vu-tag color="primary" link @click=onClick>primary</vu-tag>
</template>

<script>
export default {
  methods: {
   onClick() {
      console.log('click tag');
    },
  },
};
</script>
```

### closable
```vue
<div>
  <vu-tag color="success" closable>
    success
  </vu-tag>
  <vu-tag color="primary" closable>
    <vu-icon icon="comments"></vu-icon>primary
  </vu-tag>
</div>
```

### with icon
```vue
<div>
  <vu-tag color="primary">
    <vu-icon icon="comments"></vu-icon>primary
  </vu-tag>
  <vu-tag color="success">
    primary<vu-icon icon="check"></vu-icon>
  </vu-tag>
</div>
```
