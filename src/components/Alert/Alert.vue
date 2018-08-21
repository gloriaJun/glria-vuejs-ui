<template>
   <span
     :class="elClasses"
     class="vu-alert">
     <i :class="iconClasses"></i>
  </span>
</template>

<script>
import typeProps, { COLOR_TYPES } from '../../mixins/typeProps';

export default {
  name: 'VuIcon',
  mixins: [typeProps],
  props: {
    /**
     * The color for the button.
     */
    color: {
      type: String,
      validator: value => Object.values(COLOR_TYPES).indexOf(value) > -1,
    },
    /**
     * icon package
     */
    pack: {
      type: String,
      default: 'fas',
      validator: value => [
        'fas',
        'fab',
      ].indexOf(value) > -1,
    },
    /**
     * icon name
     */
    icon: String,
  },
  computed: {
    elClasses() {
      return [
        this.color && `icon-${this.color}`,
      ];
    },
    iconClasses() {
      return [
        this.pack,
        `fa-${this.icon}`,
        this.size && `fa-${this.size}`,
      ];
    },
  },
};
</script>
