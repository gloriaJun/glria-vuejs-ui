import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  selectV2,
  text,
} from '@storybook/addon-knobs';

import { COLOR_TYPES, SIZES } from '../constants';

storiesOf('Components|Icon', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const type = selectV2('type', ['fas', 'fab'], 'fas');
    const size = selectV2('size', SIZES, '');
    const color = selectV2('color', COLOR_TYPES, 'dark');
    const animation = selectV2('animation',  ['', 'spin', 'pulse'], '');
    const icon = text('icon', 'home');

    return ({
      template: `
        <vu-icon
          color="${color}"
          size="${size}"
          pack="${type}"
          animation="${animation}"
          icon="${icon}"></vu-icon>
      `,
      methods: {
        onClick: (e) => action('click button')(e),
      }
    });
  })
