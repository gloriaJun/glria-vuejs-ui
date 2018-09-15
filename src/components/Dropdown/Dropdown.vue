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
      default: 'bottom-left',
      validator: value => Object.values([
        'top',
        'left',
        'right',
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
      let placement = `${this.placement}`;
      if (this.placement === 'top') placement = 'dropup';
      else if (/^((left)|(right))$/.test(this.placement)) placement = `drop${this.placement}`;

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
