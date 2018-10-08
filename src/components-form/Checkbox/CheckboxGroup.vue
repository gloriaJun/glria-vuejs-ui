<template>
  <div
    role="group"
    tabindex="-1"
    class="vu-checkbox-group">
    <template v-if="options && options.length > 0">
      <vu-checkbox
        v-for="(option, index) in options"
        :key="index"
        :checked-value="option[valueField]"
        :disabled="option.disabled">{{ option[labelField] }}
      </vu-checkbox>
    </template>
    <slot v-else/>
  </div>
</template>

<script>
import VuCheckbox from '../Checkbox/Checkbox.vue';
import formOptionMixin from '../../utils/formOptionMixin';

export default {
  name: 'VuCheckboxGroup',
  components: {
    VuCheckbox,
  },
  mixins: [formOptionMixin],
  props: {
    value: {
      type: [Array, Object],
      default: () => [],
    },
    stacked: Boolean,
  },
  data() {
    return {
      isGroup: true,
      currentValue: this.value,
    };
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
