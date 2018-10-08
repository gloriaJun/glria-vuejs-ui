import VuRadio from './Radio.vue';
import VuRadioGroup from './RadioGroup.vue';

export default (Vue) => {
  Vue.component(VuRadio.name, VuRadio);
  Vue.component(VuRadioGroup.name, VuRadioGroup);
};
