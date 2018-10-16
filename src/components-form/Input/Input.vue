<template>
  <div
    :class="classes"
    class="vu-input vu-form-control"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false">

    <div
      v-if="hasSlot('prepend')"
      class="input-group-prepend">
      <div class="input-group-text">
        <slot name="prepend"/>
      </div>
    </div>

    <div class="input-box">
      <span
        v-if="hasPrefix"
        class="prefix-icon">
        <vu-icon :icon="prefixIcon"/>
      </span>

      <input
        ref="input"
        :type="type"
        :id="id"
        :value="currentValue"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        :class="inputClasses"
        v-on="listeners">

      <span
        v-if="hasSuffix"
        class="suffix-icon">
        <vu-icon
          v-if="showClearIcon"
          icon="times-circle"
          class="input-clear"
          @click="handleClickClear"/>
        <vu-icon :icon="suffixIcon"/>
      </span>
    </div>

    <div
      v-if="hasSlot('append')"
      class="input-group-append">
      <div class="input-group-text">
        <slot name="append"/>
      </div>
    </div>

  </div>
</template>

<script>
import colorUtility from '../../utils/color';
import sizeUtility from '../../utils/size';
import formMixin from '../../utils/formMixin';
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
  mixins: [
    formMixin,
    slotMixin,
  ],
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
    placeholder: String,
    clearable: Boolean,
    prefixIcon: String,
    suffixIcon: String,
    // if append or prepend is active, not work
    plaintext: Boolean,
  },
  data() {
    return {
      currentValue: this.value,
      isFocus: false,
      isHover: false,
    };
  },
  computed: {
    classes() {
      return [
        { 'input-group': this.isInputGroup },
        { 'input-prefix': this.hasPrefix },
        { 'input-suffix': this.hasSuffix },
        { [`input-group-${this.size}`]: Boolean(this.size) },
        { round: this.round },
        { [`status-${this.status}`]: Boolean(this.status) },
        { disabled: this.disabled },
      ];
    },
    inputClasses() {
      return [
        `form-control${(this.plaintext && !(this.isInputGroup)) ? '-plaintext' : ''}`,
        { [`form-control-${this.size}`]: Boolean(this.size) },
      ];
    },
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.handleInput(event),
        focus: event => this.handleFocus(event),
        blur: event => this.handleBlur(event),
      };
    },
    hasPrefix() {
      return this.prefixIcon;
    },
    hasSuffix() {
      return this.suffixIcon || this.clearable;
    },
    isInputGroup() {
      return this.hasSlot('prepend') || this.hasSlot('append');
    },
    showClearIcon() {
      return this.clearable &&
        !this.disabled &&
        !this.readonly &&
        this.currentValue !== '' &&
        (this.isFocus || this.isHover);
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
    focus() {
      this.$refs.input.focus();
    },
    /**
     * @event when input
     * @param event
     */
    handleInput(event) {
      this.currentValue = event.target.value;
    },
    handleFocus(event) {
      this.isFocus = true;
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.isFocus = false;
      this.$emit('blur', event);
    },
    handleClickClear() {
      this.currentValue = '';
      this.focus();
    },
  },
};
</script>
