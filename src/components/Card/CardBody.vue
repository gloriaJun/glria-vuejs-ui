<template>
  <div class="card-body">
    <h5
        v-if="title"
        class="card-title">{{ title }}</h5>
    <h6
        v-if="subTitle"
        class="card-subtitle mb-2 text-muted">{{ subTitle }}</h6>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'VuCardBody',
  props: {
    /**
     * The title for the card body
     */
    title: String,
    /**
     * The subtitle for the card body
     */
    subTitle: String,
  },
};
</script>
