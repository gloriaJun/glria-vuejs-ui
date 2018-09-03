<template>
  <section
    v-show="isActive"
    class="vu-tab-item">
    <slot></slot>
  </section>
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
     * tab name
     */
    name: String,
    /**
     * icon for label
     */
    icon: {
      type: String,
      default: null,
    },
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
