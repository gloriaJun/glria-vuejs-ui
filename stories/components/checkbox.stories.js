import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '../constants';

storiesOf('Components|Form/Checkbox', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const disabled = boolean('disabled', false);
    const indeterminate = boolean('indeterminate', false);
    // const color = select('color', COLOR_TYPES, COLOR_TYPES.PRIMARY);
    // const title = text('title', '');
    // const showIcon = boolean('showIcon', false);
    // const icon= text('icon', '');

    return ({
      data() {
        return {
          checked: true,
        }
      },
      template: `
      <div>
        <h5>Current Value : <strong>{{ checked }}</strong></h5>
        <vu-checkbox
          v-model="checked"
          :disabled="${disabled}"
          :indeterminate="${indeterminate}">
          Checkbox
        </vu-checkbox>
      </div>
      `,
      methods: {
      }
    });
  })
