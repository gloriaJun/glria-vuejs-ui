import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
} from '@storybook/addon-knobs';

import { COLOR_TYPES, SIZES } from '../constants';

storiesOf('Components|Icon', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const type = select('type', ['fas', 'fab'], 'fas');
    const size = select('size', SIZES, '');
    const color = select('color', COLOR_TYPES, 'dark');
    const icon = text('icon', 'home');

    return ({
      template: `
        <vu-icon
          color="${color}"
          size="${size}"
          pack="${type}"
          icon="${icon}"></vu-icon>
      `,
      methods: {
        onClick: (e) => action('click button')(e),
      }
    });
  })
