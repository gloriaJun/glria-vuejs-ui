### Basic
```vue
<template>
  <div>
     <vu-breadcrumb :items="items"></vu-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { label: 'Home', href: '/' },
        { label: 'Item1', href: '#' },
        { label: 'Item2', href: '#' },
        { label: 'Item3', href: '#', active: true },
     ],
    }
  },
};
</script>
```
