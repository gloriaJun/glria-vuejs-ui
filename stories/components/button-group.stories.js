import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import {
  boolean,
  select,
} from '@storybook/addon-knobs';

import { SIZES } from '../constants';

storiesOf('Components|Buttons/Button Group', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const size = select('size', SIZES, '');
    const vertical = boolean('vertical', false);

    return ({
      template: `
        <vu-button-group
          :vertical="${vertical}"
          size="${size}" >
          <vu-button>Left</vu-button>
          <vu-button color="info">Middle</vu-button>
          <vu-button color="secondary">Right</vu-button>
        </vu-button-group>
      `,
    });
  })
