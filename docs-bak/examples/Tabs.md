### Full Example Code

### Basic
```vue
<template>
  <vu-tab @tab-click="onClickTab">
    <vu-tab-item label="Information" name="information">
      <h2>This is Information</h2>
    </vu-tab-item>
    <vu-tab-item label="Location" name="location">
      <h2>This is Location</h2>
    </vu-tab-item>
    <vu-tab-item label="About" name="about">
      <h2>This is About</h2>
    </vu-tab-item>
  </vu-tab>
</template>
<script>
  export default {
    methods: {
      onClickTab(index, name) {
        console.log(index, name);
      },
    },
  }
</script>
```

##### Disabled
```vue
  <vu-tab>
    <vu-tab-item label="Information" name="information">
      <h2>This is Information</h2>
    </vu-tab-item>
    <vu-tab-item label="Location" name="location" disabled>
      <h2>This is Location</h2>
    </vu-tab-item>
    <vu-tab-item label="About" name="about" active>
      <h2>This is About</h2>
    </vu-tab-item>
  </vu-tab>
```

### custom label
```vue
  <vu-tab>
    <vu-tab-item>
        <template slot="label">
          <vu-icon icon="info-circle"></vu-icon>
          Information
        </template>
      <h2>This is Information</h2>
    </vu-tab-item>
    <vu-tab-item>
        <template slot="label">
          <vu-icon icon="location-arrow"></vu-icon>
          Location
        </template>
      <h2>This is Location</h2>
    </vu-tab-item>
    <vu-tab-item>
        <template slot="label">
          <vu-icon icon="question-circle"></vu-icon>
          Q&A
        </template>
      <h2>This is Q&A</h2>
    </vu-tab-item>
  </vu-tab>
```

### Style
###### Align
```vue
<template>
<div class="wrapper">
    <h5>Left (Default)</h5>
    <vu-tab>
      <vu-tab-item label="Information">
        <h2>This is Information</h2>
      </vu-tab-item>
      <vu-tab-item label="Location">
        <h2>This is Location</h2>
      </vu-tab-item>
      <vu-tab-item label="About">
        <h2>This is About</h2>
      </vu-tab-item>
    </vu-tab>

    <h5>Center</h5>
    <vu-tab align="center">
      <vu-tab-item label="Information">
        <h2>This is Information</h2>
      </vu-tab-item>
      <vu-tab-item label="Location">
        <h2>This is Location</h2>
      </vu-tab-item>
      <vu-tab-item label="About">
        <h2>This is About</h2>
      </vu-tab-item>
    </vu-tab>

   <h5>Right</h5>
    <vu-tab align="right">
      <vu-tab-item label="Information">
        <h2>This is Information</h2>
      </vu-tab-item>
      <vu-tab-item label="Location">
        <h2>This is Location</h2>
      </vu-tab-item>
      <vu-tab-item label="About">
        <h2>This is About</h2>
      </vu-tab-item>
    </vu-tab>
</div>
</template>
<script>
  export default {
  }
</script>
<style scoped>
  .wrapper .vu-tab:not(:last-child) {
    margin-bottom: 3rem;
  }
</style>
```

###### Expanded
```vue
<vu-tab expanded>
  <vu-tab-item label="Information">
    <h2>This is Information</h2>
  </vu-tab-item>
  <vu-tab-item label="Location">
    <h2>This is Location</h2>
  </vu-tab-item>
  <vu-tab-item label="About">
    <h2>This is About</h2>
  </vu-tab-item>
</vu-tab>
```

###### Type
```vue
<template>
<div class="wrapper">
    <h5>Card</h5>
    <vu-tab type="card">
      <vu-tab-item label="Information">
        <h2>This is Information</h2>
      </vu-tab-item>
      <vu-tab-item label="Location">
        <h2>This is Location</h2>
      </vu-tab-item>
      <vu-tab-item label="About">
        <h2>This is About</h2>
      </vu-tab-item>
    </vu-tab>

    <h5>Pills</h5>
    <vu-tab type="pills">
      <vu-tab-item label="Information">
        <h2>This is Information</h2>
      </vu-tab-item>
      <vu-tab-item label="Location">
        <h2>This is Location</h2>
      </vu-tab-item>
      <vu-tab-item label="About">
        <h2>This is About</h2>
      </vu-tab-item>
    </vu-tab>
</div>
</template>
<script>
  export default {
  }
</script>
<style scoped>
  .wrapper .vu-tab:not(:last-child) {
    margin-bottom: 3rem;
  }
</style>
```
