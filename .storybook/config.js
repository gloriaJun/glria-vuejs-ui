import { configure } from '@storybook/vue';
import { setConsoleOptions } from '@storybook/addon-console'

// for redirect console log
const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  panelExclude: [...panelExclude],
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
