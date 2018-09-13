<template>
  <div
    v-if="active"
    :class="{'is-full-screen': isFullScreen}"
    class="vu-loading">
    <div class="loading-spinner">
      <vu-icon
        color="primary"
        icon="spinner"
        animation="spin"
        class="loading-icon"></vu-icon>
      <div
        v-if="text"
        class="loading-text text-primary">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @example ../../../docs/examples/Loading.md
 */
export default {
  name: 'VuLoading',
  props: {
    /**
     * is show loading
     */
    show: {
      type: Boolean,
      default: false,
    },
    /**
     * is full screen loading
     */
    isFullScreen: Boolean,
    /**
     * loading message
     */
    text: String,
    programmatic: Boolean,
  },
  data() {
    return {
      active: this.show,
    };
  },
  computed: {
    classes() {
      return [
      ];
    },
  },
  mounted() {
    if (!this.programmatic) {
      this.$parent.$el.style.position = 'relative';
    }
  },
  methods: {
    close() {
      this.active = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.vu-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity .3s;
  z-index: 2000;

  &.is-full-screen {
    position: fixed !important;
  }

  .loading-spinner {
    width: 100%;
    text-align: center;

    .loading-icon {
      font-size: 2em;
    }
    .loading-text {
      margin: 3px 0;
      font-weight: 600;
      font-size: 1.2em;
    }
  }
}
</style>
