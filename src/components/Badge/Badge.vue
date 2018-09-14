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

<style lang="scss" scoped>
.vu-badge {
  position: relative;
  display: inline-block;

  .vu-tag {
    position: absolute;
    &.top-right { transform: translateY(-50%) translateX(100%); }
    &.top-left { transform: translateY(-50%) translateX(-100%); }

    &:not(.overlap) {
      top: 0;
      &.top-right { right: 0 };
      &.top-left { left: 0 };
    }
    &.overlap {
      top: 3px;
      &.top-right { right: 11px; };
      &.top-left { left: 11px; };
    }
  }
}
</style>
