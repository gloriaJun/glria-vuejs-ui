<template>
  <div class="vu-card card">
    <!-- @slot Use this slot header -->
    <header
      v-if="hasSlot('header')"
      class="card-header">
      <slot name="header"/>
    </header>

    <!-- @slot Use this slot body -->
    <slot/>

    <!-- @slot Use this slot footer -->
    <header
      v-if="hasSlot('footer')"
      class="card-footer">
      <slot name="footer"/>
    </header>

  </div>
</template>

<script>
import SlotMixin from '../../utils/slotMixin';

export default {
  name: 'VuCard',
  mixins: [SlotMixin],
};
</script>
