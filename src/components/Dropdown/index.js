import VuDropdown from './Dropdown.vue';
import VuDropdownItem from './DropdownItem.vue';

export default (Vue) => {
  Vue.component(VuDropdown.name, VuDropdown);
  Vue.component(VuDropdownItem.name, VuDropdownItem);
};
