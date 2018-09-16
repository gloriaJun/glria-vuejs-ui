<template>
  <img
    :src="src"
    :alt="alt"
    class="vu-card-media">
</template>

<script>

export default {
  name: 'VuCardMedia',
  props: {
    src: String,
    alt: String,
  },
};
</script>
