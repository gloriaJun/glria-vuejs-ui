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
import VuTag from '../Tag/Tag.vue';

/**
 * @example ../../../docs/examples/Badge.md
 */
export default {
  name: 'VuBadge',
  components: {
    VuTag,
  },
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
      default: 'danger',
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
