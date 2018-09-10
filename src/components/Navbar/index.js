import Navbar from './Navbar.vue';
import NavbarNav from './NavbarNav.vue';

export default (Vue) => {
  Vue.component(Navbar.name, Navbar);
  Vue.component(NavbarNav.name, NavbarNav);
};
