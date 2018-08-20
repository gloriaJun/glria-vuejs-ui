<template>
  <button
    v-bind="$attrs"
    :class="elClasses"
    class="vu-button">
    <slot></slot>
  </button>
</template>

<script>
import { COLOR_TYPES, SIZES } from '@/utils/constants';

export default {
  name: 'VuButton',
  props: {
    color: {
      type: String,
      default: COLOR_TYPES.PRIMARY,
      validator: value => Object.values(COLOR_TYPES).indexOf(value) > -1,

    },
    size: {
      type: String,
      default: SIZES.DEFAULT,
      validator: value => Object.values(SIZES).indexOf(value) > -1,
    },
    outline: Boolean,
  },
  computed: {
    elClasses() {
      return [
        `btn-${this.outline ? 'outline-' : ''}${this.color}`,
        this.size ? `btn-${this.size}` : '',
      ];
    },
  },
};
</script>

<style scoped>
</style>
