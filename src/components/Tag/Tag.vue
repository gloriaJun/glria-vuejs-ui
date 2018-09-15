<template>
  <component
    :is="link ? 'a' : 'span'"
    :href="link && '#'"
    :class="classes"
    class="vu-tag badge"
    @click.stop.prevent="handleClick">
    <slot/>

    <vu-icon
      v-if="closable"
      icon="times-circle"
      class="closable"
      @click.stop.prevent="handleClose"></vu-icon>
  </component>
</template>

<script>
import colorUtility from '../../utils/color';

export default {
  name: 'VuTag',
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
     * round tag style
     */
    round: Boolean,
    /**
     * outline tag style
     */
    outline: Boolean,
    /**
     * link
     */
    link: Boolean,
    closable: Boolean,
  },
  computed: {
    classes() {
      return [
        this.outline ? `outline-${this.color}` : `badge-${this.color}`,
        { 'badge-pill': this.round },
      ];
    },
  },
  methods: {
    /**
     * @event click
     * @description if link is true,
     */
    handleClick() {
      if (this.link) this.$emit('click');
    },
    /**
     * @event close
     * @type undefined
     * @description if closable is true
     */
    handleClose() {
      if (this.closable) this.$emit('close');
    },
  },
};
</script>
