<template>
  <div class="vu-card card">
    <header
        v-if="hasSlot('header')"
        class="card-header">
      <slot name="header"></slot>
    </header>

    <slot></slot>

    <header
        v-if="hasSlot('footer')"
        class="card-footer">
      <slot name="footer"></slot>
    </header>

  </div>
</template>

<script>
import SlotMixin from '../../mixins/slotMixin';

export default {
  name: 'VuCard',
  mixins: [SlotMixin],
};
</script>
