### Full Example Code

### Basic
```vue
<template>
  <div class="wrapper">
      <vu-button @click="loading = !loading">Show Loading</vu-button>
      <div class="border border-danger" style="height: 200px;">
        <vu-loading
          :show="loading"
          :is-full-screen="isFullScreen"
          text="Loading...">
        </vu-loading>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'Basic',
    data() {
      return {
        loading: false,
        isFullScreen: false,
      }
    }
  }
</script>
```

##### Button Loading 
```vue
<template>
  <div class="wrapper">
      <vu-button @click="onClick">
        <vu-loading :show="loading"></vu-loading>
        Show Loading
      </vu-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
      }
    },
    methods: {
      onClick() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      },
    },
  }
</script>
```

### programmatic (directive & service)
```vue
<template>
  <div class="wrapper">
      <vu-button @click="onClick">Show Loading</vu-button>
      <div
        v-loading="true"
        class="border border-danger"
        style="height: 200px;">
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
      }
    },
    methods: {
      onClick() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      },
    },
  }
</script>
```
