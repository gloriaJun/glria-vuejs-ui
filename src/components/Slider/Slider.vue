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
      ref="track"
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
      type: [Number, String, Array],
      default: 0,
    },
    step: {
      type: [Number, String],
      default: 0.5,
    },
    min: {
      type: [Number, String],
      default: 0,
    },
    max: {
      type: [Number, String],
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
    handleDragStart(event) {
      console.log('drag start', event, event.type, 'touches' in event, event.clientX);

      // add event
      document.addEventListener('touchmove', this.handleDragging);
      document.addEventListener('mousemove', this.handleDragging);
      document.addEventListener('mouseup', this.handleDragStop);
      document.addEventListener('touchend', this.handleDragStop);
      document.addEventListener('contextmenu', this.handleDragStop);
    },
    handleDragging(event) {
      console.log('dragging', event, event.type, 'touches' in event, event.clientX);
      this.handleClickSlider(event);
    },
    handleDragStop(event) {
      console.log('drag stop', event, event.type, 'touches' in event, event.clientX);

      // remove event
      document.removeEventListener('touchmove', this.handleDragging);
      document.removeEventListener('mousemove', this.handleDragging);
      document.removeEventListener('mouseup', this.handleDragStop);
      document.removeEventListener('touchend', this.handleDragStop);
      document.removeEventListener('contextmenu', this.handleDragStop);
    },
    /**
     * @event - when clicked slider bar
     * @param event
     */
    handleClickSlider(event) {
      // get point of the track
      const {
        left: offsetLeft,
        width: trackWidth,
      } = this.$refs.track.getBoundingClientRect();
      const offset = event.clientX - offsetLeft;
      const percent = Math.round((offset / trackWidth) * 100);
      let value = this.min + ((percent * (this.max - this.min)) / 100);

      // if outside slider, set value to min or max
      if (value > 100) value = 100;
      else if (value < 0) value = 0;
      this.setPosition(value);
    },
    /**
     * set position of thumb
     * @param position
     */
    setPosition(position) {
      const stepLength = 100 / ((this.max - this.min) / this.step);
      const steps = Math.round(position / stepLength);
      const value = (steps * stepLength * (this.max - this.min) * 0.01) + this.min;
      this.currentValue = parseFloat(value.toFixed(2));
    },
  },
};
</script>
