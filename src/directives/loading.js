import Vue from 'vue';
import VuLoading from '../components/Loading/Loading.vue';

const Mask = Vue.extend(VuLoading);

function toggleLoading(el, binding) {
  // set parent style
  el.style.position = 'relative';

  if (binding.value) {
    el.appendChild(el.mask);
    el.domInserted = true;
  } else {
    el.removeChild(el.mask);
    el.domInserted = false;
  }
}


/**
 * export directive
 */
export default {
  bind(el, binding) {
    const mask = new Mask({
      el: document.createElement('div'),
      propsData: {
        show: true,
        directive: true,
      },
    });
    el.mask = mask.$el;

    if (binding.value) toggleLoading(el, binding);
  },
  update(el, binding) {
    if (binding.oldValue !== binding.value) {
      toggleLoading(el, binding);
    }
  },
  unbind(el) {
    if (el.domInserted && el.mask) {
      toggleLoading(el, { value: false });
    }
  },
};
