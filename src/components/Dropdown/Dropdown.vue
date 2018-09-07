<template>
  <div class="vu-dropdown dropdown">
    <div
      class="dropdown-button"
      @click="handleClickToggle">
      <!-- @slot Use this slot button for dropdown toggle -->
      <slot></slot>
    </div>

    <div
        :class="{show: show}"
        class="dropdown-menu">
      <!-- @slot Use this slot menu -->
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<script>
/**
 * @example ../../../docs/examples/Dropdown.md
 */
export default {
  name: 'VuDropdown',
  props: {
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    classes() {
      return [
      ];
    },
  },
  created() {
    if (typeof window !== 'undefined') {
      document.addEventListener('click', this.handleClickDocument);
    }
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      document.removeEventListener('click', this.handleClickDocument);
    }
  },
  methods: {
    /**
     * @event toggle
     * @description Triggers when dropdown is activated or deactivated
     */
    handleClickToggle() {
      this.show = !this.show;
      this.$emit('toggle');
    },
    /**
     * Close dropdown if clicked document.
     */
    handleClickDocument(event) {
      if (!this.$el.contains(event.target)) {
        this.show = false;
        this.$emit('toggle');
      }
    },
  },
};
</script>
