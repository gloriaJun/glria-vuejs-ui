import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '../constants';

storiesOf('Components|Card', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const color = select('color', COLOR_TYPES, COLOR_TYPES.PRIMARY);
    const round = boolean('round', false);
    const link = boolean('link', false);

    return ({
      template: `
        <vu-card>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </vu-card>
      `,
      methods: {
        onClick: () => action('click badge')(),
      },
    });
  })
