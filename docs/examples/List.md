### Full Example Code

### Basic
```vue
<vu-list>
  <vu-list-item>List Item 1</vu-list-item>
  <vu-list-item>List Item 2</vu-list-item>
  <vu-list-item>List Item 3</vu-list-item>
  <vu-list-item>List Item 4</vu-list-item>
</vu-list>
```

##### Active & Disabled & Style
```vue
<vu-list>
  <vu-list-item>List Item 1</vu-list-item>
  <vu-list-item active>List Item 2</vu-list-item>
  <vu-list-item>List Item 3</vu-list-item>
  <vu-list-item disabled>List Item 4</vu-list-item>
  <vu-list-item>
  </vu-list-item>
</vu-list>
```

### Link Type
```vue
<vu-list>
  <vu-list-item href="#">List Item 1</vu-list-item>
  <vu-list-item href="#" active>List Item 2</vu-list-item>
  <vu-list-item href="#">List Item 3</vu-list-item>
  <vu-list-item href="#" disabled>List Item 4</vu-list-item>
</vu-list>
```

### Button Type
```vue
<vu-list>
  <vu-list-item button>List Item 1</vu-list-item>
  <vu-list-item button active>List Item 2</vu-list-item>
  <vu-list-item button>List Item 3</vu-list-item>
  <vu-list-item button disabled>List Item 4</vu-list-item>
</vu-list>
```

##### Other Style
```vue
<vu-list>
  <vu-list-item
    color="warning"
    class="d-flex justify-content-between align-items-center">
    List Item 1
    <vu-badge color="warning">warning</vu-badge>
  </vu-list-item>
  <vu-list-item>
    <header class="d-flex justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </header>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small>Donec id elit non mi porta.</small>
  </vu-list-item>
</vu-list>
```

### with card
```vue
<vu-card>
  <div slot="header">Card Header</div>
  <vu-list>
    <vu-list-item>List Item 1</vu-list-item>
    <vu-list-item>List Item 2</vu-list-item>
    <vu-list-item>List Item 3</vu-list-item>
    <vu-list-item>List Item 4</vu-list-item>
  </vu-list> 
</vu-card>
```

### Kitchen sink
```vue
  <vu-card>
    <vu-card-media src="https://placekitten.com/380/200"></vu-card-media>
    <vu-card-body
      title="Title">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </vu-card-body>
    <vu-list>
      <vu-list-item>List Item 1</vu-list-item>
      <vu-list-item>List Item 2</vu-list-item>
    </vu-list> 
    <vu-card-action>
      <vu-button>Button</vu-button>
    </vu-card-action>
  </vu-card>
```
