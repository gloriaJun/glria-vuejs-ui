<template>
  <ul
    :class="classes"
    class="vu-nav nav">
    <slot/>
  </ul>
</template>

<script>
export default {
  name: 'VuNav',
  props: {
    /**
     * vertical
     */
    vertical: Boolean,
  },
  computed: {
    classes() {
      return [
        { 'flex-column': this.vertical },
      ];
    },
  },
};
</script>
