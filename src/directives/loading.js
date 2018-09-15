import Vue from 'vue';
import VuLoading from '../components/Loading/Loading.vue';

function toggleLoading(el, binding) {
  el.style.position = 'relative';

  if (binding.value) {
    el.appendChild(el.component.$el);
    el.domInserted = true;
  } else {
    el.removeChild(el.component.$el);
    el.domInserted = false;
  }
}

/**
 * export directive
 */
export default {
  bind(el, binding) {
    const Component = Vue.extend(VuLoading);
    const component = new Component({
      el: document.createElement('div'),
      propsData: {
        show: true,
        programmatic: true,
      },
    });
    el.component = component;

    if (binding.value) toggleLoading(el, binding);
  },
  update(el, binding) {
    if (binding.oldValue !== binding.value) {
      toggleLoading(el, binding);
    }
  },
};
