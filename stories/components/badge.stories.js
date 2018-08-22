import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '../constants';

storiesOf('Components|Badge', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const color = select('color', COLOR_TYPES, COLOR_TYPES.PRIMARY);
    const round = boolean('round', false);
    const link = boolean('link', false);

    return ({
      template: `
        <vu-badge
          :round="${round}"
          :link="${link}"
          color="${color}"
          @click="onClick">${color}</vu-badge>
      `,
      methods: {
        onClick: () => action('click badge')(),
      },
    });
  })
