<template>
  <div
    :class="classes"
    class="vu-slider">
    <div
      ref="track"
      class="range-track"
      @click="handleClickSlider">
      <div
        :style="styleTrack"
        :class="['range-track-fill', {dragging: dragging}]"/>
    </div>
    <vu-button
      :style="styleThumb(firstValue)"
      :class="['range-thumb', {dragging: dragging}]"
      circle/>
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
      default: 0.5,
    },
    showValue: Boolean,
    showTooltip: Boolean,
  },
  data() {
    return {
      firstValue: 0,
      secondValue: 0,
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
        {} :
        {
          width: `${this.calcPosition(this.firstValue)}%`,
          left: '0%',
        };
    },
  },
  watch: {
    // firstValue(newVal) {
    //   this.$emit('input', newVal);
    // },
  },
  mounted() {
    if (this.isRange) {
      console.log('range');
    } else {
      this.firstValue = (this.value === null) ?
        this.min : Math.min(this.max, Math.max(this.min, this.value));
    }
  },
  methods: {
    calcPosition(value) {
      return 100 * ((value - this.min) / (this.max - this.min));
    },
    styleThumb(value) {
      const style = { left: `${this.calcPosition(value)}%` };
      if (this.dragging) {
        style.cursor = 'grabbing';
      }
      return style;
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
      const value = this.min + ((percent * (this.max - this.min)) / 100);

      // if outside slider, set value to min or max
      // if (value > this.max) value = this.max;
      // else if (value < this.min) value = this.min;
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

      console.log(this.max, value);
      // this.firstValue = parseFloat(value.toFixed(2));
      this.$emit('input', parseFloat(value.toFixed(2)));
    },
  },
};
</script>
