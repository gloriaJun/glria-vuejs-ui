<template>
  <component
    :is="link ? 'a' : 'span'"
    :href="link && '#'"
    :class="classes"
    class="vu-badge badge"
    @click.prevent="onClick">
    <slot/>
  </component>
</template>

<script>
import colorUtility from '../../utils/color';

export default {
  name: 'VuBadge',
  props: {
    /**
     * The color for the button.
     */
    color: {
      type: String,
      default: 'primary',
      validator: value => colorUtility.isColor(value),
    },
    /**
     * round button style
     */
    round: {
      type: Boolean,
      default: false,
    },
    /**
     * link
     */
    link: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        `badge-${this.color}`,
        { 'badge-pill': this.round },
      ];
    },
  },
  methods: {
    /**
     * @event click
     * @type undefined
     * @description if link is true,
     */
    onClick() {
      if (this.link) this.$emit('click');
    },
  },
};
</script>
