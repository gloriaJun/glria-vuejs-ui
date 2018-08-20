/* eslint-disable react/react-in-jsx-scope */
import { storiesOf } from '@storybook/vue';

import App from './App';

storiesOf('App', module).add('App', () => ({
  render: h => h(App),
}));

// basic
import './_basic.stories';
// component
import './_components.stories';

/* eslint-enable react/react-in-jsx-scope */
