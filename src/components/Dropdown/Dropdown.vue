<template>
  <div
    :class="classes"
    class="vu-dropdown dropdown"
    @mouseover="handleHoverToggle(true)"
    @mouseout="handleHoverToggle(false)">
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
    /**
     * toggle button when hover
     */
    hoverable: Boolean,
    /**
     * placement of pop menu
     */
    placement: {
      type: String,
      default: 'bottom',
      validator: value => Object.values([
        'top',
        'bottom',
        'bottom-left',
        'bottom-right',
      ]).includes(value),
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    classes() {
      let placement = '';
      if (this.placement === 'top') placement = 'dropup';
      else if (this.placement === 'bottom-left') placement = 'dropleft';
      else if (this.placement === 'bottom-right') placement = 'dropright';

      return [
        placement,
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
     * @description triggers when dropdown is activated or deactivated
     */
    toggle(show) {
      this.show = show;
      this.$emit('toggle');
    },
    /**
     * click the button
     */
    handleClickToggle() {
      this.toggle(!this.show);
    },
    /**
     * hover the button
     */
    handleHoverToggle(hover) {
      if (!this.hoverable) return;
      this.toggle(hover);
    },
    /**
     * Close dropdown if clicked document.
     */
    handleClickDocument(event) {
      if (!this.$el.contains(event.target)) {
        this.toggle(false);
      }
    },
  },
};
</script>
