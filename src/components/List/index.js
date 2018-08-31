import VuList from './List.vue';
import VuListItem from './ListItem.vue';

export default (Vue) => {
  Vue.component(VuList.name, VuList);
  Vue.component(VuListItem.name, VuListItem);
};
