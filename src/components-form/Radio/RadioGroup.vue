<template>
  <div
    :class="classes"
    role="group"
    tabindex="-1"
    class="vu-radio-group">
    <template v-if="options && options.length > 0">
      <vu-radio
        v-for="(option, index) in options"
        :key="index"
        :checked-value="option[valueField]"
        :disabled="option.disabled">{{ option[labelField] }}
      </vu-radio>
    </template>
    <slot v-else/>
  </div>
</template>

<script>
import VuRadio from './Radio.vue';
import formOptionMixin from '../../utils/formOptionMixin';
import formRadioCheckGroupMixin from '../../utils/formRadioCheckGroupMixin';

export default {
  name: 'VuRadioGroup',
  components: {
    VuRadio,
  },
  mixins: [
    formOptionMixin,
    formRadioCheckGroupMixin,
  ],
  props: {
    value: [Boolean, Number, String, Object],
  },
};
</script>
