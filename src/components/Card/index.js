import VuCard from './Card.vue';
import VuCardAction from './CardAction.vue';

export default (Vue) => {
  Vue.component(VuCard.name, VuCard);
  Vue.component(VuCardAction.name, VuCardAction);
};
