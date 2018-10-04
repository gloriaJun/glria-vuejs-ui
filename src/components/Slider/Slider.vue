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
      <span
        v-for="(item, key) in steps"
        :key="key"
        :style="{left: `${item}%`}"
        class="range-track-step"/>
    </div>
    <vu-button
      :style="styleThumb(firstValue)"
      :class="['range-thumb', {dragging: dragging}]"
      circle
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
    steps() {
      if (!this.showStep || this.step === 0) return [];
      const count = (this.max - this.min) / this.step;
      const width = 100 * (this.step / (this.max - this.min));

      const steps = [];
      for (let i = 1; i < count; i++) {
        const value = i * width;
        if (this.calcPosition(this.firstValue) <= value) {
          steps.push(value);
        }
      }

      return steps;
    },
  },
  watch: {
    value(oldVal, newVal) {
      this.drawPosition();

      if (this.isRange) {
        console.log('range');
      } else if (parseFloat(oldVal) !== parseFloat(newVal)) {
        this.$emit('change', this.firstValue);
      }
    },
    // firstValue(newVal) {
    //   if (this.isRange) {
    //     console.log('range');
    //   } else {
    //     this.$emit('input', newVal);
    //   }
    // },
  },
  mounted() {
    if (this.min > this.max) {
      console.warn('[Slider] min value should be bigger than max value');
    }
    this.drawPosition();
  },
  methods: {
    drawPosition() {
      if (this.isRange) {
        console.log('range');
      } else {
        this.firstValue = (this.value === null) ?
          this.min : Math.min(this.max, Math.max(this.min, this.value));
      }
    },
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
    handleDragStart() {
      console.log('hh');
      this.dragging = true;

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
    handleDragging(event) {
      this.setPosition(event);
    },
    /**
     * @event - when clicked slider bar
     * @param event
     */
    handleClickSlider(event) {
      this.setPosition(event);
    },
    /**
     * set position from mouse location
     * @param event
     */
    setPosition(event) {
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
        console.log('range');
      } else {
        if (value < this.min) {
          this.firstValue = this.min;
        } else if (value > this.max) {
          this.firstValue = this.max;
        } else {
          this.firstValue = value;
        }
        this.$emit('input', this.firstValue);
      }
    },
  },
};
</script>
