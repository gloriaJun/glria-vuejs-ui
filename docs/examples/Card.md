### Full Example Code
[![Edit Gvu-Card](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/k34pj0zjlo?module=%2Fsrc%2FApp.vue)

### Body
```vue
<vu-card>
  <vu-card-body
    title="Card Title"
    sub-title="subtitle">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </vu-card-body>
</vu-card>
```

##### Text alignment
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


### Action
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

### Header and footer
```vue
<div class="row">
  <div class="col-sm-6">
    <vu-card>
      <div slot="header">Card Header</div>
      <vu-card-body>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </vu-card-body>
      <div
        slot="footer"
        class="text-muted">2 days ago</div>
    </vu-card>
  </div>

  <div class="col-sm-6">
    <vu-card>
      <div slot="header" class="d-flex justify-content-between">
        Card Header
        <vu-icon icon="address-card"></vu-icon>
      </div>
      <vu-card-body>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </vu-card-body>
      <vu-card-action>
        <vu-button>Button</vu-button>
      </vu-card-action>
      <div
        slot="footer"
        class="text-muted">2 days ago</div>
    </vu-card>
  </div>
</div>
```

### Image
```vue
<div class="row">
    <div class="col-sm-6">
      <vu-card>
        <vu-card-media src="https://picsum.photos/600/300/?image=25"></vu-card-media>
        <vu-card-body>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </vu-card-body>
      </vu-card>
    </div>

    <div class="col-sm-6">
      <vu-card>
        <vu-card-body>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </vu-card-body>
        <vu-card-media src="https://picsum.photos/600/300/?image=25"></vu-card-media>
      </vu-card>
    </div>
</div>
```
