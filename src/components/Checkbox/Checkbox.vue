<template>
  <div
    :class="classes"
    class="vu-checkbox custom-checkbox custom-control">
    <input
      ref="checkbox"
      v-model="currentChecked"
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
import formMixin from '../../utils/formMixin';
import FormRadioCheckMixin from '../../utils/formRadioCheckMixin';

export default {
  name: 'VuCheckbox',
  mixins: [
    formMixin,
    FormRadioCheckMixin,
  ],
  props: {
    unCheckedValue: {
      type: [Boolean, Number, String, Array, Object],
      default: false,
    },
    indeterminate: Boolean,
  },
  watch: {
    indeterminate(newVal) {
      this.setIndeterminate(newVal);
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
      if (this.hasParent) {
        this.$parent.$emit('change', this.currentValue);
      }
    },
    setIndeterminate(state) {
      this.$refs.checkbox.indeterminate = state;
    },
  },
};
</script>
