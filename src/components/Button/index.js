import VuButton from './Button.vue';
import VuButtonGroup from './ButtonGroup.vue';

export default (Vue) => {
  Vue.component(VuButton.name, VuButton);
  Vue.component(VuButtonGroup.name, VuButtonGroup);
};
