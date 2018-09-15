<template>
  <component
      v-bind="$attrs"
      :is="button ? 'button' : (href ? 'a' : 'div')"
      :class="classes"
      :href="!button && href"
      class="vu-list-item list-group-item">
    <slot></slot>
  </component>
</template>

<script>
import colorUtility from '../../utils/color';

export default {
  name: 'VuListItem',
  props: {
    /**
     * The color for the list item.
     */
    color: {
      type: String,
      default: '',
      validator: value => colorUtility.isColor(value) || value === '',
    },
    /**
     * if item is link
     */
    href: String,
    /**
     * if item is button type
     */
    button: Boolean,
    /**
     * if item is active
     */
    active: Boolean,
    /**
     * if item is disabled
     */
    disabled: Boolean,
  },
  computed: {
    classes() {
      return [
        { active: this.active },
        { disabled: this.disabled },
        { 'list-group-item-action': this.href || this.button },
        this.color && `list-group-item-${this.color}`,
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
button.vu-list-item{
  &:focus, &.focus {
    outline: none;
    box-shadow: none;
  }
}
</style>
