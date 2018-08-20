import { configure, addDecorator } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs/vue';

import Vue from 'vue';
import VuComponent from '../src/main';

Vue.use(VuComponent);

setOptions({
  hierarchyRootSeparator: /\|/,
});

setDefaults({
  header: false
});

addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /.stories.js$/);
const req = require.context('../stories', true, /index.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
