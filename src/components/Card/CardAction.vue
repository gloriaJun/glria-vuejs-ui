<template>
  <div
      :class="classes"
      class="vu-card-action">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'VuCardAction',
  props: {
    position: {
      type: String,
      default: 'left',
      validator: value => Object.values([
        'left',
        'center',
        'right',
      ]).includes(value),
    },
  },
  computed: {
    classes() {
      return [
        `text-${this.position}`,
      ];
    },
  },
};
</script>
