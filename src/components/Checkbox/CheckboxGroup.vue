<template>
  <div
    role="group"
    tabindex="-1"
    class="vu-checkbox-group">
    <slot/>
  </div>
</template>

<script>
import VuCheckbox from './Checkbox.vue';

export default {
  name: 'VuCheckboxGroup',
  components: {
    VuCheckbox,
  },
  props: {
    stacked: Boolean,
  },
  data() {
    return {
      isGroup: true,
    };
  },
};
</script>
