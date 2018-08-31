### Full Example Code
[![Edit Gvu-Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/13m6xr01m7?module=%2Fsrc%2FApp.vue)

### Basic
###### normal
```jsx
<div>
    <vu-button>primary</vu-button>
    <vu-button color="secondary">secondary</vu-button>
    <vu-button color="info">info</vu-button>
    <vu-button color="success">success</vu-button>
    <vu-button color="warning">warning</vu-button>
    <vu-button color="danger">danger</vu-button>
    <vu-button color="light">light</vu-button>
    <vu-button color="dark">dark</vu-button>
    <vu-button color="link">link</vu-button>
</div>
```

###### disabled
```jsx
<div>
    <vu-button disabled>primary</vu-button>
    <vu-button color="secondary" disabled>secondary</vu-button>
    <vu-button color="info" disabled>info</vu-button>
    <vu-button color="success" disabled>success</vu-button>
    <vu-button color="warning" disabled>warning</vu-button>
    <vu-button color="danger" disabled>danger</vu-button>
    <vu-button color="light" disabled>light</vu-button>
    <vu-button color="dark" disabled>dark</vu-button>
    <vu-button color="link" disabled>link</vu-button>
</div>
```


### Button Type
```jsx
<div>
  <vu-button type="button">Button (default)</vu-button>
  <vu-button type="submit">Submit</vu-button>
  <vu-button type="reset">Reset</vu-button>
  <vu-button type="link" href="#">Link</vu-button>
</div>
```

### Outline
###### normal
```jsx
<div>
    <vu-button outline>primary</vu-button>
    <vu-button color="secondary" outline>secondary</vu-button>
    <vu-button color="info" outline>info</vu-button>
    <vu-button color="success" outline>success</vu-button>
    <vu-button color="warning" outline>warning</vu-button>
    <vu-button color="danger" outline>danger</vu-button>
    <vu-button color="light" outline>light</vu-button>
    <vu-button color="dark" outline>dark</vu-button>
</div>
```

###### disabled
```jsx
<div>
    <vu-button outline disabled>primary</vu-button>
    <vu-button color="secondary" outline disabled>secondary</vu-button>
    <vu-button color="info" outline disabled>info</vu-button>
    <vu-button color="success" outline disabled>success</vu-button>
    <vu-button color="warning" outline disabled>warning</vu-button>
    <vu-button color="danger" outline disabled>danger</vu-button>
    <vu-button color="light" outline disabled>light</vu-button>
    <vu-button color="dark" outline disabled>dark</vu-button>
</div>
```

### Size
```jsx
<div>
  <div>
    <vu-button size="sm">Small Size</vu-button>
    <vu-button>Default Size</vu-button>
    <vu-button size="lg">Large Size</vu-button>
  </div>
  <hr/>
  
  <div>
    <vu-button block>Block Button</vu-button>
  </div>
</div>
```

### Style
###### round
```jsx
<div>
    <vu-button round>primary</vu-button>
    <vu-button color="secondary" round>secondary</vu-button>
    <vu-button color="info" round>info</vu-button>
    <vu-button color="success" round>success</vu-button>
    <vu-button color="warning" round>warning</vu-button>
    <vu-button color="danger" round>danger</vu-button>
    <vu-button color="light" round>light</vu-button>
    <vu-button color="dark" round>dark</vu-button>
</div>
```

###### circle 
```jsx
<div>
    <vu-button circle><vu-icon icon="user"></vu-icon></vu-button>
    <vu-button color="secondary" circle>
      <vu-icon icon="check"></vu-icon>
    </vu-button>
    <vu-button color="info" circle>
      <vu-icon icon="envelope"></vu-icon>
    </vu-button>
    <vu-button color="success" circle>
      <vu-icon icon="home"></vu-icon>
    </vu-button>
    <vu-button color="warning" circle>
      <vu-icon icon="key"></vu-icon>
    </vu-button>
    <vu-button color="danger" circle> 
      <vu-icon icon="paste"></vu-icon>
    </vu-button>
    <vu-button color="light" circle> 
      <vu-icon icon="lock"></vu-icon>
    </vu-button>
    <vu-button color="dark" circle>  
      <vu-icon icon="globe"></vu-icon>
    </vu-button>
</div>
```


### with icon
```jsx
<div>
  <vu-button>
    <vu-icon icon="user"></vu-icon>User Add
  </vu-button>
  <vu-button color="secondary" outline>
    <vu-icon icon="check"></vu-icon>Check
  </vu-button>
  <vu-button color="info" round>
    <vu-icon icon="envelope"></vu-icon>Write
  </vu-button>
  <vu-button color="success" round outline>
    <vu-icon icon="home"></vu-icon>Home
  </vu-button>
</div>
```
