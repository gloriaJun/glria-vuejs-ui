export default {
  props: {
    disabled: Boolean,
    stacked: Boolean,
    buttonStyle: Boolean,
  },
  data() {
    return {
      isGroup: true,
      currentValue: this.value,
    };
  },
  computed: {
    classes() {
      return [
      ];
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
