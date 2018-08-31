### Full Example Code
[![Edit Gvu-Alert](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/jv9z3mn9xw?module=%2Fsrc%2FApp.vue)

### Basic
```vue
<div>
    <vu-alert color="primary">A simple primary alert</vu-alert>
    <vu-alert color="secondary">A simple secondary alert</vu-alert>
    <vu-alert color="info">A simple info alert</vu-alert>
    <vu-alert color="success">A simple success alert</vu-alert>
    <vu-alert color="warning">A simple warning alert</vu-alert>
    <vu-alert color="danger">A simple danger alert</vu-alert>
    <vu-alert color="light">A simple light alert</vu-alert>
    <vu-alert color="dark">A simple dark alert</vu-alert>
</div>
```

### closable
```vue
<template>
  <div>
      <vu-alert
        closable
        @close="alertClose">
        This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
      </vu-alert>
  </div>
</template>

<script>
export default {
  methods: {
    alertClose() {
      console.log('close alert');
    }
  },
};
</script>
```

### icon 
```vue
<div>
    <vu-alert color="info" show-icon>A simple alert</vu-alert>
    <vu-alert color="success" show-icon>A simple alert</vu-alert>
    <vu-alert color="warning" show-icon>A simple alert</vu-alert>
    <vu-alert color="danger" show-icon>A simple alert</vu-alert>
    
    <vu-alert
      color="primary"
      icon="check">
      A simple primary alert
      Aww yeah, you successfully read this important alert message. 
      This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
    </vu-alert>    
    <vu-alert
      color="dark"
      icon="home"
      closable>
      A simple primary alert
      Aww yeah, you successfully read this important alert message. 
      This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
    </vu-alert>
</div>
```