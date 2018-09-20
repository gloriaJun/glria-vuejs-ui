<template>
  <div
    :class="classes"
    class="vu-input vu-form-control">
    <input
      :type="type"
      :id="id"
      :value="currentValue"
      :placeholder="placeholder"
      :readonly="readonly"
      :class="inputClasses"
      v-on="listeners">
  </div>
</template>

<script>
import colorUtility from '../../utils/color';
import sizeUtility from '../../utils/size';

// Valid supported input types
const TYPES = [
  'text',
  'password',
  'email',
  'number',
  'url',
  'tel',
  'search',
  'range',
  'color',
  'date',
  'time',
  'month',
  'week',
];

export default {
  name: 'VuInput',
  props: {
    id: String,
    value: [String, Number],
    status: {
      type: String,
      default: '',
      validator: value => colorUtility.isStatus(value),
    },
    size: {
      type: String,
      validator: value => sizeUtility.isSizes(value),
    },
    disabled: Boolean,
    readonly: Boolean,
    round: Boolean,
    type: {
      type: String,
      default: 'text',
      validator: value => TYPES.indexOf(value) > -1,
    },
    label: String,
    placeholder: String,
    helpText: String,
    plaintext: Boolean,
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  computed: {
    classes() {
      return [
        { round: this.round },
        { [`status-${this.status}`]: Boolean(this.status) },
      ];
    },
    inputClasses() {
      return [
        `form-control${this.plaintext ? '-plaintext' : ''}`,
        { [`form-control-${this.size}`]: Boolean(this.size) },
      ];
    },
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.handleInput(event),
      };
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
  methods: {
    /**
     * @event when input
     * @param event
     */
    handleInput(event) {
      this.currentValue = event.target.value;
    },
  },
};
</script>
