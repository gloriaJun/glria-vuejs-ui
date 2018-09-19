<template>
  <div
    :class="classes"
    class="vu-slider">
    <input
      v-model="value"
      type="range">
    <div class="range-track">
      <div
        :style="{width: `${value}%`}"
        class="range-track-fill"/>
    </div>
    <div
      :style="{left: `${value}%`}"
      class="range-thumb"/>
  </div>
</template>

<script>
import colorUtility from '../../utils/color';

export default {
  name: 'VuSlider',
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: value => colorUtility.isColor(value),
    },
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    showValue: Boolean,
    disabled: Boolean,
  },
  computed: {
    classes() {
      return [
        `slider-${this.color}`,
        { disabled: this.disabled },
      ];
    },
  },
  watch: {
  },
};
</script>
