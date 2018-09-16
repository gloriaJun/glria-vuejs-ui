<template>
  <div class="vu-checkbox custom-checkbox custom-control custom-control-inline">
    <input
      ref="checkbox"
      v-model="value"
      v-on="$listeners"
      :disabled="disabled"
      type="checkbox"
      class="custom-control-input">
    <label class="custom-control-label">
      <slot></slot>
    </label>
  </div>
</template>

<script>
import sizeUtility from '../../utils/size';

export default {
  name: 'VuCheckbox',
  props: {
    value: [Boolean, Number, String, Array, Object],
    /**
     * The size for the button.
     */
    size: {
      type: String,
      validator: value => sizeUtility.isSizes(value),
    },
    disabled: Boolean,
    indeterminate: Boolean,
  },
  computed: {
    elClasses() {
      return [
      ];
    },
  },
  watch: {
    // value (value) {
    //   this.checkedValue = value;
    // },
  },
  mounted() {
    this.setIndeterminate(this.indeterminate);
  },
  methods: {
    /**
     * @event click
     * @param event
     */
    onClick(event) {
      this.$emit('click', event);
    },
    setIndeterminate(state) {
      this.$refs.checkbox.indeterminate = state;
    },
  },
};
</script>
