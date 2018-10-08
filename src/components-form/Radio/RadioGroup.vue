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

import colorUtility from '../../utils/color';
import sizeUtility from '../../utils/size';

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
};
</script>
