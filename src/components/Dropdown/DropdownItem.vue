<template>
  <a
    :href="href"
    class="vu-dropdown-item dropdown-item"
    @click.prevent>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'VuDropdownItem',
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
    /**
     * active
     */
    active: Boolean,
  },
  computed: {
    classes() {
      return [
        { disabled: this.disabled },
        { active: this.active },
      ];
    },
  },
};
</script>
