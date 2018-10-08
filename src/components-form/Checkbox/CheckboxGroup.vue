<template>
  <div
    :class="classes"
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
import formRadioCheckGroupMixin from '../../utils/formRadioCheckGroupMixin';

export default {
  name: 'VuCheckboxGroup',
  components: {
    VuCheckbox,
  },
  mixins: [
    formOptionMixin,
    formRadioCheckGroupMixin,
  ],
  props: {
    value: {
      type: [Array, Object],
      default: () => [],
    },
  },
};
</script>
