<template>
  <div class="vu-tabs">
    <vu-nav :class="classes">
      <vu-nav-item
        v-for="(tab, index) in tabs"
        :key="index"
        :disabled="tab.disabled"
        :active="tab.isActive"
        @click.prevent="handleClickTab(tab)">{{ tab.label }}</vu-nav-item>
    </vu-nav>

    <div class="tab-contents">
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
  },
  data() {
    return {
      // activeTabName: this.value,
      // activeTabIndex: 0,
      tabs: [],
    };
  },
  computed: {
    classes() {
      return [
        { 'nav-tabs': this.type === 'card' },
        { 'nav-pills  nav-fill': this.type === 'pills' },
      ];
    },
  },
  mounted() {
    this.tabs = this.$children.filter(child => child.$el.className === 'vu-tab-item');

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
