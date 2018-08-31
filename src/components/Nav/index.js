import VuNav from './Nav.vue';
import VuNavItem from './NavItem.vue';

export default (Vue) => {
  Vue.component(VuNav.name, VuNav);
  Vue.component(VuNavItem.name, VuNavItem);
};
