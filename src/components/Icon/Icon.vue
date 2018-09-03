<template>
   <span
     v-on="$listeners"
     :class="elClasses"
     class="vu-icon">
     <i :class="iconClasses"></i>
  </span>
</template>

<script>
import colorUtility from '../../utils/color';
import sizeUtility from '../../utils/size';

/**
 * @example ../../../docs/examples/Icon.md
 */
export default {
  name: 'VuIcon',
  props: {
    /**
     * The color for the button.
     */
    color: {
      type: String,
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
     * icon package
     * - fas, fab
     */
    pack: {
      type: String,
      default: 'fas',
      validator: value => [
        'fas',
        'fab',
      ].indexOf(value) > -1,
    },
    /**
     * icon animation
     * - spin, pulse
     */
    animation: {
      type: String,
      validator: value => [
        '',
        'spin',
        'pulse',
      ].indexOf(value) > -1,
    },
    /**
     * icon name
     */
    icon: String,
  },
  computed: {
    elClasses() {
      return [
        this.color && `icon-${this.color}`,
      ];
    },
    iconClasses() {
      return [
        this.pack,
        `fa-${this.icon}`,
        this.size && `fa-${this.size}`,
        this.animation && `fa-${this.animation}`,
      ];
    },
  },
};
</script>
