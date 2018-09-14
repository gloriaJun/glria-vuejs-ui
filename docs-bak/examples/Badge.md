### Full Example Code

### Basic
```vue
<template>
  <div class="wrapper">
    <div class="row">
      <vu-badge value="5">New</vu-badge>
      <vu-badge value="45">
        <vu-avatar icon="home"></vu-avatar>
      </vu-badge>
    </div>
    <div class="row">
      <vu-badge value="5" position="left">New</vu-badge>
      <vu-badge value="999+" position="left">
        <vu-avatar icon="home"></vu-avatar>
      </vu-badge>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style scoped>
  .wrapper .vu-badge {
    margin: 0 2rem;
  }
  .wrapper .row {
    margin: 1rem 0;
  }
</style>
```

##### with icon 
```vue
<div>
    <vu-badge>
        <vu-button>Button</vu-button>
        <vu-icon slot="badge" icon="info"></vu-icon>
    </vu-badge>
</div>
```

### overlap
```vue
<div>
    <vu-badge overlap>
        <vu-button>Button</vu-button>
        <vu-icon slot="badge" icon="info"></vu-icon>
    </vu-badge>
</div>
```

### color
```vue
<div>
  <vu-badge value="New" color="success">
    <vu-avatar icon="home"></vu-avatar>
  </vu-badge>
</div>
```
