<template>
  <div
    :class="classes"
    class="vu-radio vu-form-control custom-radio custom-control">
    <input
      v-model="currentChecked"
      :id="formId"
      :value="checkedValue"
      :disabled="disabled"
      type="radio"
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
  name: 'VuRadio',
  mixins: [
    formMixin,
    FormRadioCheckMixin,
  ],
  methods: {
    /**
     * @event change
     * @param event
     */
    handleChange({ target: { checked } }) {
      this.$emit('change', checked ? this.checkedValue : null);
      if (this.hasParent) {
        this.$parent.$emit('change', this.currentValue);
      }
    },
  },
};
</script>
