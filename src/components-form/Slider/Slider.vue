<template>
  <div
    :class="classes"
    class="vu-slider vu-form-control">
    <div
      ref="track"
      class="range-track"
      @click="handleClickSlider">
      <div
        :style="styleTrack"
        :class="['range-track-fill', {dragging: dragging}]"/>
      <span
        v-for="(item, key) in steps"
        :key="key"
        :style="{left: `${item}%`}"
        class="range-track-step"/>
    </div>
    <vu-button
      :style="styleThumb(0)"
      :class="['range-thumb', {dragging: dragging}]"
      circle
      @mousedown="handleDragStart(0)"/>
    <vu-button
      v-if="isRange"
      :style="styleThumb(1)"
      :class="['range-thumb', {dragging: dragging}]"
      circle
      @mousedown="handleDragStart(1)"/>
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
    // The minimum value of the slider
    min: {
      type: [Number, String],
      default: 0,
    },
    // The maximum value of the slider
    max: {
      type: [Number, String],
      default: 100,
    },
    step: {
      type: [Number, String],
      default: 1,
      validator: value => parseFloat(value) > 0,
    },
    showValue: Boolean,
    showStep: Boolean,
    showTooltip: Boolean,
  },
  data() {
    return {
      firstValue: 0,
      secondValue: 0,
      currentValue: 0,
      thumbIndex: 0,
      dragging: false,
    };
  },
  computed: {
    classes() {
      return [
        `slider-${this.color}`,
        { disabled: this.disabled },
      ];
    },
    isRange() {
      return (Array.isArray(this.value));
    },
    styleTrack() {
      return this.isRange ?
        {
          width: `${100 * ((this.currentValue[1] - this.currentValue[0]) / (this.max - this.min))}%`,
          left: `${this.calcPosition(this.currentValue[0])}%`,
        } :
        {
          width: `${this.calcPosition(this.currentValue)}%`,
          left: '0%',
        };
    },
    steps() {
      if (!this.showStep || this.step === 0) return [];
      const count = (this.max - this.min) / this.step;
      const width = 100 * (this.step / (this.max - this.min));

      const steps = [];
      for (let i = 1; i < count; i++) {
        const value = i * width;
        if (this.calcPosition(this.currentValue) <= value) {
          steps.push(value);
        }
      }

      return steps;
    },
  },
  watch: {
    value(newVal) {
      this.setValues(newVal);
      this.$emit('change', this.currentValue);
    },
  },
  mounted() {
    if (this.min > this.max) {
      console.warn('[Slider] min value should be bigger than max value');
    }
    this.setPosition(this.value);
  },
  methods: {
    calcPosition(value) {
      return 100 * ((value - this.min) / (this.max - this.min));
    },
    styleThumb(index) {
      const value = this.isRange ? this.currentValue[index] : this.currentValue;
      const style = { left: `${this.calcPosition(value)}%` };
      if (this.dragging) {
        style.cursor = 'grabbing';
      }
      return style;
    },
    handleDragStart(index) {
      this.dragging = true;
      this.thumbIndex = index;

      // add event
      document.addEventListener('touchmove', this.handleDragging);
      document.addEventListener('mousemove', this.handleDragging);
      document.addEventListener('mouseup', this.handleDragStop);
      document.addEventListener('touchend', this.handleDragStop);
      document.addEventListener('contextmenu', this.handleDragStop);
    },
    handleDragStop() {
      this.dragging = false;

      // remove event
      document.removeEventListener('touchmove', this.handleDragging);
      document.removeEventListener('mousemove', this.handleDragging);
      document.removeEventListener('mouseup', this.handleDragStop);
      document.removeEventListener('touchend', this.handleDragStop);
      document.removeEventListener('contextmenu', this.handleDragStop);
    },
    /**
     * @event - when dragging slider bar
     * @param event
     */
    handleDragging(event) {
      this.getPosition(event);
    },
    /**
     * @event - when clicked slider bar
     * @param event
     */
    handleClickSlider(event) {
      this.getPosition(event);
    },
    /**
     * set position from mouse location
     * @param event
     */
    getPosition(event) {
      // get point of the track
      const {
        left: offsetLeft,
        width: trackWidth,
      } = this.$refs.track.getBoundingClientRect();
      const pos = event.clientX - offsetLeft;
      // get percent
      const percent = Math.round((pos / trackWidth) * 100);

      const stepLength = 100 / ((this.max - this.min) / this.step);
      const steps = Math.round(percent / stepLength);
      let value = (steps * stepLength * (this.max - this.min) * 0.01) + this.min;
      value = parseFloat(value.toFixed(2));

      if (this.isRange) {
        const {
          value: oldValue,
        } = this;

        if (this.dragging) {
          if (value < Math.min(this.currentValue[0], this.currentValue[1])) {
            this.thumbIndex = 0;
          } else if (value > Math.max(this.currentValue[0], this.currentValue[1])) {
            this.thumbIndex = 1;
          }
        } else {
          this.thumbIndex = Math.abs(oldValue[0] - value) < Math.abs(oldValue[1] - value) ? 0 : 1;
        }
        oldValue[this.thumbIndex] = value;
        this.setPosition(oldValue);
      } else {
        this.setPosition(value);
      }
    },
    setPosition(value) {
      if (value !== this.currentValue) this.setValues(value);
      this.$emit('input', this.currentValue);
    },
    setValues(value) {
      const valueCheck = val =>
        ((val === null) ? this.min : Math.min(this.max, Math.max(this.min, val)));

      if (this.isRange) {
        const first = valueCheck(value[0]);
        const second = valueCheck(value[1]);
        this.currentValue = [Math.min(first, second), Math.max(first, second)];
      } else {
        this.currentValue = valueCheck(value);
      }
    },
  },
};
</script>
