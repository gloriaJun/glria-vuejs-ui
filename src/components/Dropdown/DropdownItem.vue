<template>
  <a
    :href="href"
    :class="classes"
    class="vu-dropdown-item dropdown-item"
    @click.stop.prevent="handleClickMenu">
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
  methods: {
    /**
     * @event click
     * @description triggers when menu item is clicked
     */
    handleClickMenu() {
      if (this.$parent && this.$parent.$options._componentTag === 'vu-dropdown') {
        this.$parent.show = false;
      }
      this.$emit('click');
    },
  },
};
</script>
