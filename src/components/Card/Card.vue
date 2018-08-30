<template>
  <div class="vu-card card">
    <header
        v-if="hasSlot('header')"
        class="card-header">
      <slot name="header"></slot>
    </header>

    <div class="card-body">
      <h5
          v-if="title"
          class="card-title">{{ title }}</h5>
      <h6
          v-if="subTitle"
          class="card-subtitle mb-2 text-muted">{{ subTitle }}</h6>
      <slot></slot>
    </div>

  </div>
</template>

<script>
import SlotMixin from '../../mixins/slotMixin';

export default {
  name: 'VuCard',
  mixins: [SlotMixin],
  props: {
    title: String,
    subTitle: String,
  },
  computed: {
    classes() {
      return [
      ];
    },
  },
  methods: {
  },
};
</script>
