<template>
  <li
    :class="{dropdown: dropdown}"
    class="vu-nav-item nav-item">
    <a
      v-bind="$attrs"
      v-on="$listeners"
      :href="href"
      :class="classes"
      class="nav-link"
      @click.stop.prevent="handleClickMenu">
      <slot></slot>
    </a>
    <div
      v-if="dropdown"
      :class="{show: show}"
      class="dropdown-menu">
      <slot name="dropdown-menu"></slot>
    </div>
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
    /**
     * active
     */
    active: Boolean,
    /**
     * if dropdown
     */
    dropdown: Boolean,
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    classes() {
      return [
        { disabled: this.disabled },
        { active: this.active },
        { 'dropdown-toggle': this.dropdown },
      ];
    },
  },
  methods: {
    /**
     * @event click
     * @description triggers when menu item is clicked
     */
    handleClickMenu() {
      if (this.dropdown) {
        this.show = !this.show;
      } else {
        this.$emit('click');
      }
    },
  },
};
</script>
