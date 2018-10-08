import './styles/index.scss';

import * as components from './components';
import * as componentsFrom from './components-form';
import * as directives from './directives';
import * as services from './services';

const Gvu = {
  install(Vue, options = {}) {
    // plugin
    // Vue.use(VeeValidate, {
    //   events: 'input|change|blur',
    // });
    // Vue.directive('mask', mask);

    // component
    Object.values(components).forEach((component) => {
      Vue.use(component);
    });
    Object.values(componentsFrom).forEach((component) => {
      Vue.use(component);
    });

    // directives
    Object.keys(directives).forEach((key) => {
      let _key = key.replace(/^Vu/, '').toLocaleLowerCase();
      _key = options.prefix ? options.prefix + _key : _key;
      Vue.directive(_key, directives[key]);
    });

    // services
    Vue.prototype.$vu = {};
    Object.keys(services).forEach((key) => {
      const service = services[key];
      Object.keys(service).forEach((serviceKey) => {
        const _key = options.prefix ? `${options.prefix}_${serviceKey}` : serviceKey;
        Vue.prototype.$vu[_key] = service[serviceKey];
      });
    });
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Gvu);
}

export default Gvu;
