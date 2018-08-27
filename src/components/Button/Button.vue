<template>
  <button
    v-bind="$attrs"
    :class="elClasses"
    class="vu-button btn"
    @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
import colorUtility from '../../utils/color';
import sizeUtility from '../../utils/size';

export default {
  name: 'VuButton',
  props: {
    /**
     * The color for the button.
     */
    color: {
      type: String,
      default: 'primary',
      validator: value => colorUtility.isColor(value),
    },
    /**
     * The size for the button.
     */
    size: {
      type: String,
      validator: value => sizeUtility.isSizes(value),
    },
    /**
     * block button style
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * outline button style
     */
    outline: {
      type: Boolean,
      default: false,
    },
    /**
     * round button style
     */
    round: {
      type: Boolean,
      default: false,
    },
    /**
     * circle button style
     */
    circle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    elClasses() {
      return [
        `btn-${this.outline ? 'outline-' : ''}${this.color}`,
        { [`btn-${this.size}`]: Boolean(this.size) },
        { 'btn-block': Boolean(this.block) },
        { 'btn-round': Boolean(this.round) },
        { 'btn-circle': Boolean(this.circle) },
      ];
    },
  },
  methods: {
    /**
     * @event click
     * @param event
     */
    onClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
