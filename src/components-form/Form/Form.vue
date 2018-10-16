<template>
  <form
    :class="classes"
    class="vu-form"
    @submit.prevent="handleSubmit"
    @reset.prevent="handleReset">
    <slot/>
  </form>
</template>

<script>
// import formMixin from '../../utils/formMixin';
// import colorUtility from '../../utils/color';

export default {
  name: 'VuForm',
  mixins: [
    // formMixin,
  ],
  props: {
  },
  data() {
    return {
    };
  },
  computed: {
    classes() {
      return [
      ];
    },
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    handleSubmit() {
      this.$emit('submit');
    },
    handleReset() {
      this.$emit('reset');
    },
  },
};
</script>
