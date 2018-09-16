<template>
  <section
    v-show="isActive"
    :class="{'show active': isActive}"
    class="vu-step-item tab-pane fade">
    <slot/>
  </section>
</template>

<script>
import uuid from '@/utils/uuid';

export default {
  name: 'VuStepItem',
  props: {
    /**
     * icon
     */
    icon: String,
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
