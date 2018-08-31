<template>
  <component
    v-bind="$attrs"
    :is="isLink ? 'a' : 'button'"
    :href="isLink && href"
    :class="elClasses"
    class="vu-button btn"
    @click="onClick">
    <slot></slot>
  </component>
</template>

<script>
import colorUtility from '../../utils/color';
import sizeUtility from '../../utils/size';

/**
 * @example ../../../docs/examples/Button.md
 */
export default {
  name: 'VuButton',
  props: {
    /**
     * button type
     * - button, submit, reset, link
     */
    type: {
      type: String,
      default: 'button',
      validator: value => Object.values([
        'button',
        'submit',
        'reset',
        'link',
      ]).includes(value),
    },
    /**
     * The color for the button.
     */
    color: {
      type: String,
      default: 'primary',
      validator: value => colorUtility.isColor(value) || value === 'link',
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
    /**
     * disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * if button type is link,
     */
    href: String,
  },
  computed: {
    elClasses() {
      return [
        `btn-${this.outline ? 'outline-' : ''}${this.color}`,
        { [`btn-${this.size}`]: Boolean(this.size) },
        { 'btn-block': Boolean(this.block) },
        { 'btn-round': Boolean(this.round) },
        { 'btn-circle': Boolean(this.circle) },
        { disabled: this.disabled },
      ];
    },
    isLink() {
      return this.type === 'link';
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
