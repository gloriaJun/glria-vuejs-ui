import VuCard from './Card.vue';
import VuCardBody from './CardBody.vue';
import VuCardAction from './CardAction.vue';
import VuCardMedia from './CardMedia.vue';

export default (Vue) => {
  Vue.component(VuCard.name, VuCard);
  Vue.component(VuCardBody.name, VuCardBody);
  Vue.component(VuCardAction.name, VuCardAction);
  Vue.component(VuCardMedia.name, VuCardMedia);
};
