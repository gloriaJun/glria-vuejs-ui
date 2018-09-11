import Vue from 'vue';
import VuLoading from '../components/Loading/Loading.vue';

const Mask = Vue.extend(VuLoading);

const loading = (params) => {
  const propsData = Object.assign({ show: true }, params);

  const instance = new Mask({
    el: document.createElement('div'),
    propsData,
  });
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
};

export default { loading };
