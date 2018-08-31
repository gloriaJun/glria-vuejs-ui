### Full Example Code
[![Edit Gvu-Card](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/k34pj0zjlo?module=%2Fsrc%2FApp.vue)

### Card Body
```vue
<vu-card>
  <vu-card-body
    title="Card Title"
    sub-title="subtitle">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </vu-card-body>
</vu-card>
```

##### Align
```vue
<section>
  <h2>left (default)</h2>
  <vu-card class="text-left">
    <vu-card-body
      title="Card Title"
      sub-title="subtitle">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </vu-card-body>
  </vu-card>

  <h2>center</h2>
  <vu-card class="text-center">
    <vu-card-body
      title="Card Title"
      sub-title="subtitle">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </vu-card-body>
  </vu-card>

  <h2>right</h2>
  <vu-card class="text-right">
    <vu-card-body
      title="Card Title"
      sub-title="subtitle">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </vu-card-body>
  </vu-card>
</section>
```


### Card Action
```vue
  <vu-card>
    <vu-card-body
      title="Card Title"
      sub-title="subtitle">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </vu-card-body>
    <vu-card-action>
      <vu-button type="link" href="#" color="link">Link</vu-button>
      <vu-button>Button</vu-button>
    </vu-card-action>
  </vu-card>
```
