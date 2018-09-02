<template>
  <ul
      :class="classes"
      class="vu-nav nav">
    <slot></slot>
  </ul>
</template>

<script>
/**
 * @example ../../../docs/examples/Nav.md
 */
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
