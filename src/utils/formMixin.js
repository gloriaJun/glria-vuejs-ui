
export default {
  props: {
    disabled: Boolean,
    readonly: Boolean,
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  computed: {
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
