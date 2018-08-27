<template>
  <div class="vu-progress progress">
    <div
      :aria-valuenow="value"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :style="{width: value + '%'}"
      :class="classes"
      class="progress-bar">
      <slot>
        <span v-if="showValue">
          {{ value }}%
        </span>
      </slot>
    </div>
  </div>
</template>

<script>
import colorUtility from '../../utils/color';

export default {
  name: 'VuProgress',
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: value => colorUtility.isColor(value),
    },
    value: {
      type: Number,
      default: 0,
      validator: value => value >= 0,
    },
    min: {
      type: Number,
      default: 0,
      validator: value => value >= 0,
    },
    max: {
      type: Number,
      default: 100,
      validator: value => value >= 0,
    },
    showValue: Boolean,
    striped: Boolean,
  },
  computed: {
    classes() {
      return [
        { [`bg-${this.color}`]: Boolean(this.color) },
        { 'progress-bar-striped': Boolean(this.striped) },
      ];
    },
  },
  methods: {
  },
};
</script>
