<template>
  <div
    :class="classes"
    class="vu-form-group form-group">

    <label
      v-if="label"
      :for="formId">
      {{ label }}
    </label>

    <!-- form control -->
    <slot/>

    <div
      v-if="validMessage || invalidMessage"
      :class="[`${validMessage ? valid : invalid}-feedback`]">
      {{ validMessage ? validMessage : invalidMessage }}
    </div>
    <small
      v-else-if="helpText"
      class="form-text text-muted">
      {{ helpText }}
    </small>
  </div>
</template>

<script>
// import formMixin from '../../utils/formMixin';
// import colorUtility from '../../utils/color';
import uuid from '../../utils/uuid';

export default {
  name: 'VuFormGroup',
  mixins: [
    // formMixin,
  ],
  props: {
    id: String,
    label: String,
    helpText: String,
    validMessage: String,
    invalidMessage: String,
  },
  data() {
    return {
      formId: this.id || uuid(),
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
  },
};
</script>
