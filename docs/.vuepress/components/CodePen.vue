<template>
  <iframe
      :height="height"
      :title="title"
      :src='`//codepen.io/${userId}/embed/${hash}/?height=${height}&theme-id=0&default-tab=result&embed-version=2`'
      scrolling="no"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
      style="width: 100%;">
    See the Pen
    <a :href='`https://codepen.io/${userId}/pen/${hash}/`'>
      {{ title }}
    </a>
    by {{ userId }}(<a href=`https://codepen.io/${userId}}`>@{{ userId }}</a>) on
    <a href="https://codepen.io">
      CodePen
    </a>.
  </iframe>
</template>

<script>
  export default {
    name: 'codePen',
    props: {
      userId: {
        type: String,
        default: 'gloriaJun',
      },
      hash: {
        type: String,
        require: true,
      },
      title: {
        type: String,
        default: 'example',
      },
      height: {
        type: Number,
        default: 300,
      },
    },
  };
</script>
