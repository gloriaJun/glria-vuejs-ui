<template>
  <div class="vu-input">
    <label
      v-if="label"
      :for="formId">
      {{ label }}
    </label>
  </div>
</template>

<script>
import uuid from '../../utils/uuid';

export default {
  name: 'VuInput',
  props: {
    id: String,
    value: [Boolean, Number, String, Array, Object],
    disabled: Boolean,
    label: String,
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
  methods: {
  },
};
</script>
