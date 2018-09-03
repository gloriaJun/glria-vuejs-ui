<template>
  <div class="vu-tabs">
    <vu-nav :class="classes">
      <vu-nav-item
        v-for="(tab, index) in tabs"
        :key="index"
        :disabled="tab.disabled"
        :active="tab.isActive"
        @click.prevent="handleClickTab(tab)">
        <vu-icon
            v-if="tab.icon"
            :icon="tab.icon"></vu-icon>
        {{ tab.label }}
      </vu-nav-item>
    </vu-nav>

    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**
 * @example ../../../docs/examples/Tabs.md
 */
export default {
  name: 'VuTabs',
  props: {
    /**
     * type of Tab
     */
    type: {
      type: String,
      default: '',
      validator: value => Object.values([
        '',
        'card',
        'pills',
      ]).includes(value),
    },
    /**
     * alignment styles
     */
    align: {
      type: String,
      default: '',
      validator: value => Object.values([
        '',
        'center',
        'end',
      ]).includes(value),
    },
    /**
     * whether width of tab automatically fits its container
     */
    grow: Boolean,
  },
  data() {
    return {
      tabs: [],
    };
  },
  computed: {
    classes() {
      return [
        { 'nav-tabs': this.type === 'card' },
        { 'nav-pills  nav-fill': this.type === 'pills' },
        this.align && `justify-content-${this.align}`,
        { 'nav-justified': this.grow },
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
