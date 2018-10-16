import colorUtility from '../utils/color';
import sizeUtility from '../utils/size';

export default {
  props: {
    disabled: Boolean,
    stacked: Boolean,
    buttonStyle: Boolean,
    color: {
      type: String,
      default: 'primary',
      validator: value => colorUtility.isColor(value),
    },
    size: {
      type: String,
      validator: value => sizeUtility.isSizes(value),
    },
  },
  data() {
    return {
      isGroup: true,
      currentValue: this.value,
    };
  },
  computed: {
    classes() {
      return this.buttonStyle ?
        [
          'btn-group-toggle',
          `btn-group${this.stacked ? '-vertical' : ''}`,
        ] : [
          { 'group-stacked': this.stacked },
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
