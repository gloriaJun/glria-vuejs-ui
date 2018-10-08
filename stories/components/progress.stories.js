import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import {
  selectV2,
  number,
  boolean,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '../constants';

storiesOf('Components|Progress', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const color = selectV2('color', COLOR_TYPES, 'primary');
    const value = number('value', 30);
    const min = number('min', 0);
    const max = number('max', 100);
    const showValue = boolean('show value', false);
    const striped = boolean('striped', false);

    return ({
      template: `
        <vu-progress
          color="${color}"
          :min=${min}
          :max=${max}
          :value=${value}
          :striped="${striped}"
          :show-value="${showValue}">
        </vu-progress>
      `,
    });
  })
