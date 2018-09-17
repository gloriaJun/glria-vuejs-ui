<template>
  <button
    :class="classes"
    type="button"
    class="vu-switch btn"
    data-toggle="button"
    aria-pressed="false">
    <span class="handle"/>
  </button>
</template>

<script>
import colorUtility from '../../utils/color';

export default {
  name: 'VuSwitch',
  props: {
    value: Boolean,
    checkedValue: {
      type: [Boolean, Number, String, Array, Object],
      default: true,
    },
    unCheckedValue: {
      type: [Boolean, Number, String, Array, Object],
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
      validator: value => colorUtility.isColor(value) || value === 'link',
    },
  },
  computed: {
    classes() {
      return [
        `btn-${this.color}`,
      ];
    },
  },
  watch: {
  },
  methods: {
  },
};
</script>
