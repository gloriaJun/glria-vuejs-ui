<template>
  <ol class="vu-breadcrumb breadcrumb">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="{active: item.active}"
      class="breadcrumb-item">
      <a
        v-if="!item.active"
        :href="item.href">
        {{ item.label }}
      </a>
      <span v-else>
        {{ item.label }}
      </span>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'VuBreadcrumb',
  props: {
    /**
     * The items that will construct the breadcrumb
     */
    items: Array,
  },
};
</script>
