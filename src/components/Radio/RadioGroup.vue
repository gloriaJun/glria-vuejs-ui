<template>
  <div
    role="group"
    tabindex="-1"
    class="vu-radio-group">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'VuRadioGroup',
  props: {
    value: [Boolean, Number, String, Object],
    stacked: Boolean,
  },
  data() {
    return {
      currentValue: this.value,
      isGroup: true,
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
</script>
