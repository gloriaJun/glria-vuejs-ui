<template>
  <div
    :class="elClasses"
    class="vu-button-group">
    <slot/>
  </div>
</template>

<script>
import VuButton from './Button.vue';
import sizeUtility from '../../utils/size';

export default {
  name: 'VuButtonGroup',
  components: {
    VuButton,
  },
  props: {
    size: {
      type: String,
      validator: value => sizeUtility.isSizes(value),
    },
    /**
     * if button vertical stacked
     */
    vertical: Boolean,
  },
  computed: {
    elClasses() {
      return [
        `btn-group${this.vertical ? '-vertical' : ''}`,
        { [`btn-group-${this.size}`]: Boolean(this.size) },
      ];
    },
  },
};
</script>
