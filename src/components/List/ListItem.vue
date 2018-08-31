<template>
  <li
      :class="classes"
      class="vu-list-item list-group-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'VuListItem',
  props: {
    /**
     * if item is active
     */
    active: Boolean,
  },
  computed: {
    classes() {
      return [
        { active: this.active },
      ];
    },
  },
};
</script>
