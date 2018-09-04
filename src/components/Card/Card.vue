<template>
  <div class="vu-card card">
    <!-- @slot Use this slot header -->
    <header
        v-if="hasSlot('header')"
        class="card-header">
      <slot name="header"></slot>
    </header>

    <!-- @slot Use this slot body -->
    <slot></slot>

    <!-- @slot Use this slot footer -->
    <header
        v-if="hasSlot('footer')"
        class="card-footer">
      <slot name="footer"></slot>
    </header>

  </div>
</template>

<script>
import SlotMixin from '../../utils/slotMixin';

/**
 * @example ../../../docs/examples/Card.md
 */
export default {
  name: 'VuCard',
  mixins: [SlotMixin],
};
</script>
