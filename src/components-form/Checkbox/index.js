import VuCheckbox from './Checkbox.vue';
import VuCheckboxGroup from './CheckboxGroup.vue';

export default (Vue) => {
  Vue.component(VuCheckbox.name, VuCheckbox);
  Vue.component(VuCheckboxGroup.name, VuCheckboxGroup);
};
