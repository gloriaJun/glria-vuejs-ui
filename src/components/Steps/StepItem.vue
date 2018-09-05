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
     * title of step
     */
    title: String,
    /**
     * description
     */
    description: String,
  },
  data() {
    return {
      uuid: uuid(),
      isActive: false,
    };
  },
};
</script>
