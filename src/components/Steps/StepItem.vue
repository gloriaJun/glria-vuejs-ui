<template>
  <section
    v-show="isActive"
    :class="{'show active': isActive}"
    class="vu-step-item tab-pane fade">
    <slot></slot>
  </section>
</template>

<script>
import uuid from '@/utils/uuid';

export default {
  name: 'VuStepItem',
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
     * if tab disabled
     */
    disabled: Boolean,
  },
  data() {
    return {
      uuid: uuid(),
      isActive: false,
    };
  },
};
</script>
