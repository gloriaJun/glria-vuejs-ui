<template>
  <div
    :class="classes"
    class="vu-checkbox custom-checkbox custom-control">
    <input
      ref="checkbox"
      v-model="currentValue"
      :id="formId"
      :value="checkedValue"
      :true-value="checkedValue"
      :false-value="unCheckedValue"
      :disabled="disabled"
      type="checkbox"
      class="custom-control-input"
      @change="handleChange">
    <label
      :for="formId"
      class="custom-control-label">
      <slot/>
    </label>
  </div>
</template>

<script>
import uuid from '../../utils/uuid';

export default {
  name: 'VuCheckbox',
  props: {
    id: String,
    value: [Boolean, Number, String, Array, Object],
    checkedValue: {
      type: [Boolean, Number, String, Array, Object],
      default: true,
    },
    unCheckedValue: {
      type: [Boolean, Number, String, Array, Object],
      default: false,
    },
    disabled: Boolean,
    indeterminate: Boolean,
  },
  data() {
    return {
      formId: this.id || uuid(),
      currentValue: this.value,
    };
  },
  computed: {
    classes() {
      return [
        { 'custom-control-inline': !(this.hasParent && this.$parent.stacked) },
      ];
    },
    hasParent() {
      return this.$parent && this.$parent.isGroup;
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
  mounted() {
    this.setIndeterminate(this.indeterminate);
  },
  methods: {
    /**
     * @event change
     * @param event
     */
    handleChange({ target: { checked } }) {
      this.$emit('change', checked ? this.checkedValue : this.unCheckedValue);
    },
    setIndeterminate(state) {
      this.$refs.checkbox.indeterminate = state;
    },
  },
};
</script>
