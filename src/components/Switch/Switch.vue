<template>
  <button
    :class="classes"
    type="button"
    class="vu-switch btn"
    data-toggle="button"
    aria-pressed="false"
    @click="handleClick">
    <span class="handle"/>
    <span
      v-if="showLabel"
      class="label checked-label">
      {{ checkedValue }}
    </span>
    <span
      v-if="showLabel"
      class="label unchecked-label">
      {{ uncheckedValue }}
    </span>
  </button>
</template>

<script>
import colorUtility from '../../utils/color';

export default {
  name: 'VuSwitch',
  props: {
    value: [Boolean, Number, String],
    checkedValue: {
      type: [Boolean, Number, String],
      default: true,
    },
    uncheckedValue: {
      type: [Boolean, Number, String],
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
      validator: value => colorUtility.isColor(value) || value === 'link',
    },
    showLabel: Boolean,
  },
  data() {
    return {
      checked: this.value === this.checkedValue,
    };
  },
  computed: {
    classes() {
      return [
        `btn-${this.color}`,
        { checked: this.checked },
        { disabled: this.disabled },
      ];
    },
  },
  watch: {
    value(newVal) {
      this.currentValue = newVal;
    },
  },
  methods: {
    handleClick() {
      this.checked = !this.checked;
      const value = this.checked ? this.checkedValue : this.uncheckedValue;
      this.$emit('input', value);
      this.$emit('change', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.vu-switch {
  position: relative;
  height: 1.5rem;
  width: 3.25rem;
  border-radius: 1.5rem;
  padding: 0;

  > .handle {
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 1.125rem;
    background: #fff;
    transition: all .25s ease;
  }

  .label {
    line-height: 1.5rem;
    width: 100%;
    font-size: 0.6em;
    position: absolute;
    bottom: 0;
    text-transform: capitalize;
    opacity: 0;
    overflow: hidden;
    transition: all .2s ease;

    &.checked-label {
      right: 0;
      padding-left: .3rem;
      text-align: left;
    }
    &.unchecked-label {
      left: 0;
      padding-right: .3rem;
      text-align: right;
    }
  }
  &.checked > .checked-label {
    opacity: 1;
  }

  &:not(.checked) {
    $color: #dee2e6;

    &, &:focus, &:active {
      background-color: $color;
      border-color: $color;
    }
    > .handle {
      left: 0.1rem;
    }
    .unchecked-label {
      color: darken($color, 20%);
      opacity: 1;
    }
  }
}
</style>
