<template>
  <div class="vu-badge">
    <slot/>

    <vu-tag
      :color="color"
      :class="[`top-${position}`, {overlap: overlap}]"
      round>
      <slot name="badge">
        {{ value }}
      </slot>
    </vu-tag>
  </div>
</template>

<script>
import colorUtility from '../../utils/color';

/**
 * @example ../../../docs/examples/Badge.md
 */
export default {
  name: 'VuBadge',
  props: {
    /**
     * display value
     */
    value: [String, Number],
    /**
     * The color for the button.
     */
    color: {
      type: String,
      default: 'error',
      validator: value => colorUtility.isColor(value),
    },
    /**
     * position of badge
     */
    position: {
      type: String,
      default: 'right',
      validator: value => Object.values([
        'right',
        'left',
      ]).includes(value),
    },
    /**
     * overlap
     */
    overlap: Boolean,
  },
};
</script>
