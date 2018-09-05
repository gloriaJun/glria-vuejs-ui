import VuTabs from './Tab.vue';
import VuTabItem from './TabItem.vue';

export default (Vue) => {
  Vue.component(VuTabs.name, VuTabs);
  Vue.component(VuTabItem.name, VuTabItem);
};
