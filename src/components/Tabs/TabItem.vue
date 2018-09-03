<template>
  <section
    v-show="isActive"
    :class="{'show active': isActive}"
    class="vu-tab-item tab-pane fade">
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
    label: String,
    /**
     * tab name
     */
    name: String,
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
