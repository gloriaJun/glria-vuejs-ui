import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '../constants';

storiesOf('Components|Loading', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {

    return ({
      template: `
      `,
      methods: {
        onClick: () => action('click badge')(),
      },
    });
  })
