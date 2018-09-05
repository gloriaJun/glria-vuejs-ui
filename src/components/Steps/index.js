import VuSteps from './Step.vue';
import VuStepItem from './StepItem.vue';

export default (Vue) => {
  Vue.component(VuSteps.name, VuSteps);
  Vue.component(VuStepItem.name, VuStepItem);
};
