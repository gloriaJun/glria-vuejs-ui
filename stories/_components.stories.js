import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import {
  boolean,
  select,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '@/utils/constants';

const ROOT = 'Components|';

storiesOf(`${ROOT}Buttons`, module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const type = select('type', ['button', 'submit', 'reset'], 'button');
    const color = select('color', COLOR_TYPES, 'primary');
    const outline = boolean('outline', false);

    return ({
      template: `
        <vu-button
          type="${type}"
          color="${color}"
          :outline="${outline}">${color}</vu-button>
      `,
    });
  })
