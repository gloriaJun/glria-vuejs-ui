<template>
  <div
      :class="elClasses"
      class="vu-button-group">
    <slot></slot>
  </div>
</template>

<script>
import VuButton from './Button.vue';
import sizeUtility from '../../utils/size';

/**
 * @example ../../../docs/examples/ButtonGroup.md
 */
export default {
  name: 'VuButtonGroup',
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
  components: {
    VuButton,
  },
  computed: {
    elClasses() {
      return [
        `btn-group${this.vertical ? '-vertical' : ''}`,
        { [`btn-group-${this.size}`]: Boolean(this.size) },
      ];
    },
  },
  methods: {
  },
};
</script>
