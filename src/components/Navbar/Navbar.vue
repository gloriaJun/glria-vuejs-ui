<template>
  <nav class="vu-navbar navbar navbar-expand-md navbar-dark bg-primary">
    <a
      v-if="brandName || hasSlot('brand')"
      :href="brandLink"
      class="navbar-brand">
      <slot name="brand">
        <span v-html="brandName"/>
      </slot>
    </a>

    <template v-if="hasSlot()">
      <vu-button
        class="navbar-toggler"
        @click="show = !show">
        <span class="navbar-toggler-icon"/>
      </vu-button>
      <div
        :class="{ show: show }"
        class="collapse navbar-collapse">
        <slot/>
      </div>
    </template>
  </nav>
</template>

<script>
import SlotMixin from '../../utils/slotMixin';

export default {
  name: 'VuNavbar',
  mixins: [SlotMixin],
  props: {
    /**
     * href of brand
     */
    brandLink: {
      type: String,
      default: '#',
    },
    /**
     * name of brand
     */
    brandName: String,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
