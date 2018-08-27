<template>
  <div
    v-if="active"
    :class="classes"
    class="vu-alert">

    <vu-icon
      v-if="hasIcon"
      :icon="iconName"
      size="lg"></vu-icon>

    <div class="alert-content">
      <h4
        v-if="title"
        class="alert-heading">{{ title }}</h4>
      <slot></slot>
    </div>

    <vu-button
        v-if="closable"
        class="close"
        @click="handleClose">
      <span>&times;</span>
    </vu-button>

  </div>
</template>

<script>
import messageMixin from '../../mixins/messageMixin';

export default {
  name: 'VuAlert',
  mixins: [messageMixin],
  props: {
    /**
     * close button show or not
     */
    closable: Boolean,
  },
  computed: {
    classes() {
      return [
        `alert-${this.color}`,
        { 'alert-dismissible': this.closable },
      ];
    },
  },
  methods: {
    /**
     * Close event
     *
     * @event close
     * @type null
     */
    handleClose() {
      this.active = false;
      this.$emit('close');
    },
  },
};
</script>
