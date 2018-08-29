<template>
  <div class="vu-card card">
    <div class="card-body">
      <h5
          v-if="title"
          class="card-title">{{ title }}</h5>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VuCard',
  props: {
    title: String,
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
