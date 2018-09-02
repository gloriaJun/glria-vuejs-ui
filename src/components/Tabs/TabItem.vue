<template>
  <div
    v-show="isActive"
    class="vu-tab-item">
    <slot></slot>
  </div>
</template>

<script>
import uuid from '@/utils/uuid';

export default {
  name: 'VuTabItem',
  props: {
    /**
     * tab label
     */
    label: {
      type: String,
      required: true,
    },
    /**
     * icon for label
     */
    icon: String,
    /**
     * if tab active
     */
    active: Boolean,
    /**
     * if tab disabled
     */
    disabled: Boolean,
  },
  data() {
    return {
      id: uuid(),
      isActive: this.active,
    };
  },
};
</script>
