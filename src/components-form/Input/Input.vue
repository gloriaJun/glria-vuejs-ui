<template>
  <div
    :class="classes"
    class="vu-input vu-form-control">

    <div
      v-if="hasSlot('prepend')"
      class="input-group-prepend">
      <span class="input-group-text">
        <slot name="prepend"/>
      </span>
    </div>

    <input
      :type="type"
      :id="id"
      :value="currentValue"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :class="inputClasses"
      v-on="listeners">

    <div
      v-if="hasSlot('append')"
      class="input-group-append">
      <span class="input-group-text">
        <slot name="append"/>
      </span>
    </div>

  </div>
</template>

<script>
import colorUtility from '../../utils/color';
import sizeUtility from '../../utils/size';
import slotMixin from '../../utils/slotMixin';

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
  mixins: [slotMixin],
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
    // if input group, not work
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
        { 'input-group': this.isInputGroup },
        { [`input-group-${this.size}`]: Boolean(this.size) },
        { round: this.round },
        { [`status-${this.status}`]: Boolean(this.status) },
        { disabled: this.disabled },
      ];
    },
    inputClasses() {
      return [
        `form-control${(this.plaintext && !(this.hasSlot('prepend') || this.hasSlot('prepend'))) ? '-plaintext' : ''}`,
        { [`form-control-${this.size}`]: Boolean(this.size) },
      ];
    },
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.handleInput(event),
      };
    },
    isInputGroup() {
      return this.hasSlot('prepend') || this.hasSlot('append');
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
