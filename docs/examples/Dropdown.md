### Full Example Code

### Basic
```vue
<div class="row">
  <vu-dropdown>
    <vu-button>Dropdown (Click)</vu-button>
    <template slot="menu">
        <vu-dropdown-item>Item 1</vu-dropdown-item>
        <vu-dropdown-item>Item 2</vu-dropdown-item>
        <vu-dropdown-item>Item 3</vu-dropdown-item>
    </template>
  </vu-dropdown>
  <vu-dropdown hoverable style="margin-left: 1rem;">
    <vu-button>Dropdown (Hover)</vu-button>
    <template slot="menu">
        <vu-dropdown-item>Item 1</vu-dropdown-item>
        <vu-dropdown-item>Item 2</vu-dropdown-item>
        <vu-dropdown-item>Item 3</vu-dropdown-item>
    </template>
  </vu-dropdown>
</div>
```

### placement
```vue
<template>
  <div class="wrapper d-flex flex-wrap">
      <vu-dropdown placement="top">
        <vu-button>Top</vu-button>
        <template slot="menu">
            <vu-dropdown-item>Item 1</vu-dropdown-item>
            <vu-dropdown-item>Item 2</vu-dropdown-item>
            <vu-dropdown-item>Item 3</vu-dropdown-item>
        </template>
      </vu-dropdown>
      <vu-dropdown placement="left">
        <vu-button>Left</vu-button>
        <template slot="menu">
            <vu-dropdown-item>Item 1</vu-dropdown-item>
            <vu-dropdown-item>Item 2</vu-dropdown-item>
            <vu-dropdown-item>Item 3</vu-dropdown-item>
        </template>
      </vu-dropdown>
      <vu-dropdown placement="right">
        <vu-button>Right</vu-button>
        <template slot="menu">
            <vu-dropdown-item>Item 1</vu-dropdown-item>
            <vu-dropdown-item>Item 2</vu-dropdown-item>
            <vu-dropdown-item>Item 3</vu-dropdown-item>
        </template>
      </vu-dropdown>
      <vu-dropdown placement="bottom-left">
        <vu-button>Bottom Left (Default)</vu-button>
        <template slot="menu">
            <vu-dropdown-item>Item 1</vu-dropdown-item>
            <vu-dropdown-item>Item 2</vu-dropdown-item>
            <vu-dropdown-item>Item 3</vu-dropdown-item>
        </template>
      </vu-dropdown>   
      <vu-dropdown placement="bottom-right">
        <vu-button>Bottom Right</vu-button>
        <template slot="menu">
            <vu-dropdown-item>Item 1</vu-dropdown-item>
            <vu-dropdown-item>Item 2</vu-dropdown-item>
            <vu-dropdown-item>Item 3</vu-dropdown-item>
        </template>
      </vu-dropdown>            
    </div> 
</template>
<script>
  export default {
  }
</script>
<style scoped>
  .wrapper .vu-dropdown:not(:first-child) {
    margin-bottom: .3rem;
    margin-left: 1rem;
  }
</style>
```

### context menu
```vue
``` 
