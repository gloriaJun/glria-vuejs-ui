<template>
  <div
    :style="style"
    class="vu-avatar">
    <img
      v-if="src"
      :src="src">
    <span v-else-if="text">{{ text }}</span>
    <vu-icon
      v-else
      :icon="icon"></vu-icon>
  </div>
</template>

<script>
/**
 * @example ../../../docs/examples/Avatar.md
 */
export default {
  name: 'VuAvatar',
  props: {
    /**
     * image url
     */
    src: String,
    /**
     * icon name
     */
    icon: {
      type: String,
      default: 'person',
    },
    /**
     * text
     */
    text: [String, Number],
    /**
     * avatar size
     */
    size: {
      type: Number,
      default: 50,
    },
    /**
     * avatar background color
     */
    bgColor: {
      type: String,
      default: '#9e9e9e',
    },
    /**
     * text color
     */
    textColor: {
      type: String,
      default: '#ffffff',
    },
  },
  computed: {
    classes() {
      return [
      ];
    },
    style() {
      return {
        width: `${this.size}px`,
        minWidth: `${this.size}px`,
        height: `${this.size}px`,
        backgroundColor: this.bgColor,
        color: this.textColor,
      };
    },
  },
  methods: {
  },
};
</script>
