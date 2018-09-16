import uuid from './uuid';

export default {
  props: {
    id: String,
    value: [Boolean, Number, String, Array, Object],
    checkedValue: {
      type: [Boolean, Number, String, Array, Object],
      default: true,
    },
    disabled: Boolean,
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
    currentChecked: {
      get() {
        return this.hasParent ? this.$parent.currentValue : this.currentValue;
      },
      set(value) {
        if (this.hasParent) this.$parent.currentValue = value;
        else this.currentValue = value;
      },
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
};
