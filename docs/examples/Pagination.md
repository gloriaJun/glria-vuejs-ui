### Full Example Code

### Basic
```vue
<template>
  <div class="wrapper">
    <h5>Current Page : {{ current }}</h5>
    <vu-pagination
        v-model="current" 
        :total="48"
        @page-change="onChange"></vu-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        current: 1,
      }
    },
    methods: {
      onChange(current) {
        console.log('page change', current);
      }
    },
  }
</script>
```

##### more than 7 pages
```vue
<vu-pagination :total="148"></vu-pagination>
```


### pageSize
*add pageSize change example*
```vue
<template>
  <div class="row align-items-center">
    <h6>Total {{ total }}</h6>
    <vu-pagination
        :total="total"
        :per-page="pageSize"></vu-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        total: 359,
        pageSize: 10,
      }
    },
  }
</script>
<style scoped>
.row h6 {
  margin: 0 2rem;
}
</style>
```

### Border
```vue
<vu-pagination :total="138" border></vu-pagination>
```

### Size
##### Small
```vue
<vu-pagination :total="38" size="sm"></vu-pagination>
```
##### Large 
```vue
<vu-pagination :total="38" size="lg"></vu-pagination>
```

### Align
##### Center
```vue
<vu-pagination :total="38" align="center"></vu-pagination>
```
##### Right
```vue
<vu-pagination :total="38" align="right"></vu-pagination>
```
