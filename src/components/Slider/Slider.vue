<template>
  <div
    :class="classes"
    class="vu-slider"
    @keydown.left="handleKeydownLeft"
    @keydown.right="handleKeydownRight">
    <input
      v-model="currentValue"
      type="range">
    <div
      ref="slider"
      class="range-track"
      @click="handleClickSlider">
      <div
        :style="{width: `${value}%`}"
        class="range-track-fill"/>
    </div>
    <div
      :style="{left: `${value}%`}"
      class="range-thumb"
      @mousedown="handleDragStart"/>
  </div>
</template>

<script>
import formMixin from '../../utils/formMixin';
import colorUtility from '../../utils/color';

export default {
  name: 'VuSlider',
  mixins: [
    formMixin,
  ],
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
  },
  data() {
    return {
      currentValue: this.value,
    };
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
    value(newVal) {
      this.currentValue = newVal;
    },
    currentValue(newVal) {
      this.$emit('input', newVal);
    },
  },
  methods: {
    handleKeydownLeft() {
      console.log('keydown left');
    },
    handleKeydownRight() {
      console.log('keydown right');
    },
    handleDragStart() {
      console.log('drag start');
    },
    /**
     * @event - when clicked slider bar
     * @param event
     */
    handleClickSlider(event) {
      const { slider } = this.$refs;
      console.log(slider, event);
      // const offset = event.clientX - slider.getBoundingClientRect().left;
      // this.setThumbPosition((offset / slider.clientWidth) * 100);
    },
    setThumbPosition(percent) {
      console.log('set position', percent);
    },
  },
};
</script>
