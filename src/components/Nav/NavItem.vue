<template>
  <li class="vu-nav-item nav-item">
    <a
      v-bind="$attrs"
      :href="href"
      :class="classes"
      class="nav-link">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: 'VuNavItem',
  props: {
    /**
     * link
     */
    href: {
      type: String,
      default: '#',
    },
    /**
     * disabled
     */
    disabled: Boolean,
  },
  computed: {
    classes() {
      return [
      ];
    },
  },
};
</script>
