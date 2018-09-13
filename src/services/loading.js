import Vue from 'vue';
import VuLoading from '../components/Loading/Loading.vue';

const loading = (param) => {
  const Component = Vue.extend(VuLoading);
  const component = new Component({
    el: document.createElement('div'),
    propsData: {
      show: true,
      programmatic: true,
      text: param.text,
    },
  });

  if (param && param.el) {
    const $el = param.el;
    $el.style.position = 'relative';
    $el.appendChild(component.$el);
  } else {
    document.body.appendChild(component.$el);
  }

  return component;
};

export default { loading };
