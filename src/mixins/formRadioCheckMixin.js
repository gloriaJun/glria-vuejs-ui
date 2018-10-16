import uuid from '../utils/uuid';

export default {
  props: {
    id: String,
    value: [Boolean, Number, String, Array, Object],
    checkedValue: {
      type: [Boolean, Number, String, Array, Object],
      default: true,
    },
  },
  data() {
    return {
      formId: this.id || uuid(),
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
    isDisabled() {
      return this.disabled || (this.hasParent && this.$parent.disabled);
    },
    isButtonStyle() {
      return Boolean(this.hasParent && this.$parent.buttonStyle);
    },
    buttonClasses() {
      const { color, size } = this.$parent;
      return [
        'btn',
        `btn-${color}`,
        size ? `btn-${size}` : '',
        { disabled: this.isDisabled },
      ];
    },
  },
};
