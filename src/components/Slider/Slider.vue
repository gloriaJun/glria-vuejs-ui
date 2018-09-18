<template>
  <div
    :class="classes"
    class="vu-slider">
    <input
      v-model="value"
      type="range"
      class="custom-range">
    <div class="bar-container">
      <div
        :style="{left: `${value}%`}"
        class="circle"/>
      <div
        :style="{width: `${value}%`}"
        class="progress"/>
    </div>
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

<style lang="scss" scoped>
.vu-slider {
  &.disabled {
    color: #868e96;
    opacity: 0.65;
  }
  input[type=range] {
    opacity: 0;
  }
  .bar-container {
    height: 6px;
    position: relative;
    display: block;
    border-radius: 15px;
    background-color: #dee2e6;

    > .circle {
      position: absolute;
      top: -5px;
      width: 1rem;
      height: 1rem;
      border-radius: 1.125rem;
      background: #fff;
      box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);
      transform: translateX(-50%);
      transition: all .25s ease;
      cursor: pointer;
    }
  }
}
</style>
