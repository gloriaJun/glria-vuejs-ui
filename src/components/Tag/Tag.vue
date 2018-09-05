<template>
  <component
    :is="link ? 'a' : 'span'"
    :href="link && '#'"
    :class="classes"
    class="vu-tag badge"
    @click.stop.prevent="handleClick">
    <slot/>

    <vu-icon
      v-if="closable"
      icon="times-circle"
      class="closable"
      @click.stop.prevent="handleClose"></vu-icon>
  </component>
</template>

<script>
import colorUtility from '../../utils/color';

/**
 * @example ../../../docs/examples/Tag.md
 */
export default {
  name: 'VuTag',
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
     * round button style
     */
    round: {
      type: Boolean,
      default: false,
    },
    /**
     * link
     */
    link: {
      type: Boolean,
      default: false,
    },
    closable: Boolean,
  },
  computed: {
    classes() {
      return [
        `badge-${this.color}`,
        { 'badge-pill': this.round },
      ];
    },
  },
  methods: {
    /**
     * @event click
     * @type undefined
     * @description if link is true,
     */
    handleClick() {
      if (this.link) this.$emit('click');
    },
    /**
     * @event close
     * @type undefined
     * @description if closable is true
     */
    handleClose() {
      if (this.closable) this.$emit('close');
    },
  },
};
</script>
