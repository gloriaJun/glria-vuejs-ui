<template>
  <div class="vu-tabs">
    <ul
        :class="classes"
        class="nav">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        class="nav-item">
        <a
            href="#"
            class="nav-link"
            :class="[ {active: tab.isActive}, {disabled: tab.disabled} ]"
            @click.prevent="handleClickTab(tab)">
          {{ tab.label }}
        </a>
      </li>
    </ul>

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
    this.tabs = this.$children;

    // if any tabl is not active, first index set active
    if (!this.tabs.some(tab => tab.isActive)) {
      this.tabs[0].isActive = true;
    }
  },
  methods: {
    handleClickTab(tab) {
      this.tabs.map((obj) => {
        obj.isActive = (obj.id === tab.id);
        return obj;
      });
    },
  },
};
</script>
