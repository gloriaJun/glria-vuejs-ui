<template>
  <div class="vu-tabs">
    <vu-nav :class="classes">
      <vu-nav-item
        v-for="(tab, index) in tabs"
        :key="index"
        :disabled="tab.disabled"
        :active="tab.isActive"
        @click.prevent="handleClickTab(tab)">
        <vu-slot
          v-if="tab.$slots.label"
          :component="tab"
          tag="span"
          name="label"></vu-slot>
        <template v-else>
          {{ tab.label }}
        </template>
      </vu-nav-item>
    </vu-nav>

    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import VuSlot from '../../utils/SlotComponent';

/**
 * @example ../../../docs/examples/Tabs.md
 */
export default {
  name: 'VuTabs',
  components: {
    VuSlot,
  },
  props: {
    /**
     * type of Tab
     */
    type: {
      type: String,
      default: 'line',
      validator: value => Object.values([
        'line',
        'card',
        'pills',
      ]).includes(value),
    },
    /**
     * alignment styles
     */
    align: {
      type: String,
      default: 'left',
      validator: value => Object.values([
        'left',
        'center',
        'end',
      ]).includes(value),
    },
    /**
     * whether width of tab automatically fits its container
     */
    expanded: Boolean,
  },
  data() {
    return {
      tabs: [],
    };
  },
  computed: {
    classes() {
      return [
        `nav-${this.type}`,
        `justify-content-${this.align}`,
        { 'nav-justified': this.expanded },
      ];
    },
  },
  mounted() {
    this.tabs = this.$children.filter(child => child.$options._componentTag === 'vu-tab-item');

    // if any tabl is not active, first index set active
    if (!this.tabs.some(tab => tab.isActive)) {
      this.tabs[0].isActive = true;
    }
  },
  methods: {
    handleClickTab(tab) {
      let activeIndex = 0;
      this.tabs.map((obj, index) => {
        obj.isActive = (obj.id === tab.id);
        if (obj.isActive) activeIndex = index;
        return obj;
      });

      this.$emit('tab-click', activeIndex, tab.name);
    },
  },
};
</script>
