<template>
  <div
    role="group"
    tabindex="-1"
    class="vu-checkbox-group">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'VuCheckboxGroup',
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
