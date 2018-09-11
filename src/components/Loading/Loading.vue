<template>
  <div
    v-if="show"
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
    show: Boolean,
    /**
     * loading message
     */
    text: String,
    directive: Boolean,
    service: Boolean,
  },
  computed: {
    classes() {
      return [
      ];
    },
  },
  mounted() {
    if (!this.directive && !this.service) {
      this.$parent.$el.style.position = 'relative';
    }
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.vu-loading {
  position: absolute;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity .3s;

  .loading-spinner {
    top: 50%;
    margin-top: -3em;
    width: 100%;
    text-align: center;
    position: absolute;

    .loading-icon {
      font-size: 2.5em;
    }
    .loading-text {
      margin: 3px 0;
      font-weight: 600;
      font-size: 1.2em;
    }
  }
}
</style>
