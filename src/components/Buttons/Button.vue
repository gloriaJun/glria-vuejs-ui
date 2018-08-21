<template>
  <button
    v-bind="$attrs"
    :class="elClasses"
    class="vu-button"
    @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
import typeProps from '../../mixins/typeProps';

export default {
  name: 'VuButton',
  mixins: [typeProps],
  props: {
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
      const color = this.color ? this.color : 'primary';
      return [
        `btn-${this.outline ? 'outline-' : ''}${color}`,
        this.size && `btn-${this.size}`,
        { 'btn-block': this.block },
        { 'btn-round': this.round },
        { 'btn-circle': this.circle },
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
