<template>
  <div
    :class="classes"
    class="vu-slider">
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
    };
  },
  computed: {
    classes() {
      return [
      ];
    },
  },
  watch: {
  },
  methods: {
  },
};
</script>
