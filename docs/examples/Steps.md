### Full Example Code

### Basic
```vue
<template>
  <div class="wrapper">
      <vu-step :active="active">
        <vu-step-item>Step 1</vu-step-item>
        <vu-step-item>Step 2</vu-step-item>
        <vu-step-item>Step 3</vu-step-item>
        <vu-step-item>Step 4</vu-step-item>
      </vu-step> 
      <vu-button @click="onClickNext">{{ btnText }}</vu-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
        btnText: 'Next',
      }
    },
    methods: {
      onClickNext() {
        if (this.active >= 3) return;
        if (++this.active === 3) this.btnText = 'Done';
      },
    },
  }
</script>
<style scoped>
  .wrapper .vu-button {
    margin-top: .5rem;
  }
</style>
```

### with icon
```vue
<template>
  <div class="wrapper">
      <vu-step :active="active">
        <vu-step-item icon="user">Step 1</vu-step-item>
        <vu-step-item icon="edit">Step 2</vu-step-item>
        <vu-step-item icon="key">Step 3</vu-step-item>
      </vu-step> 
      <vu-button @click="onClickNext">{{ btnText }}</vu-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
        btnText: 'Next',
      }
    },
    methods: {
      onClickNext() {
        if (this.active >= 2) return;
        if (++this.active === 2) this.btnText = 'Done';
      },
    },
  }
</script>
<style scoped>
  .wrapper .vu-button {
    margin-top: .5rem;
  }
</style>
```

### with title
```vue
<template>
  <div class="wrapper">
      <vu-step :active="active">
        <vu-step-item title="Step 1" icon="user">Step 1</vu-step-item>
        <vu-step-item title="Step 2" description="description">Step 2</vu-step-item>
        <vu-step-item title="Step 3">Step 3</vu-step-item>
      </vu-step> 
      <vu-button @click="onClickNext">{{ btnText }}</vu-button>
      <vu-button v-if="active > 0" @click="onClickPrev">Previous</vu-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
        btnText: 'Next',
      }
    },
    methods: {
      onClickNext() {
        if (this.active >= 2) return;
        if (++this.active === 2) this.btnText = 'Done';
      },
      onClickPrev() {
        if (--this.active < 2) this.btnText = 'Next';
      },
    },
  }
</script>
<style scoped>
  .wrapper .vu-button {
    margin-top: .5rem;
  }
</style>
```
