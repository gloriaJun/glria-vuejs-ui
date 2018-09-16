<template>
  <div
    role="group"
    tabindex="-1"
    class="vu-radio-group">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'VuRadioGroup',
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
