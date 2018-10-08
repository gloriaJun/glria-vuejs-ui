<template>
  <div
    v-if="!isButtonStyle"
    :class="classes"
    class="vu-checkbox vu-form-control custom-checkbox custom-control">
    <input
      ref="checkbox"
      v-model="currentChecked"
      :id="formId"
      :value="checkedValue"
      :true-value="checkedValue"
      :false-value="uncheckedValue"
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
  <label
    v-else
    :class="[buttonClasses, { active: checked }]">
    <input
      ref="checkbox"
      v-model="currentChecked"
      :value="checkedValue"
      type="checkbox"
      @change="handleChange">
    <slot/>
  </label>
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
    uncheckedValue: {
      type: [Boolean, Number, String, Array, Object],
      default: false,
    },
    indeterminate: Boolean,
  },
  data() {
    return {
      checked: false,
    };
  },
  watch: {
    indeterminate(newVal) {
      this.setIndeterminate(newVal);
    },
  },
  mounted() {
    this.checked = this.$refs.checkbox && this.$refs.checkbox.checked;
    this.setIndeterminate(this.indeterminate);
  },
  methods: {
    /**
     * @event change
     * @param event
     */
    handleChange({ target: { checked } }) {
      this.checked = checked;
      this.$emit('change', checked ? this.checkedValue : this.uncheckedValue);
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
