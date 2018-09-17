import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '../constants';

storiesOf('Components-Form|Switch', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const color = select('color', COLOR_TYPES, 'primary');
    const disabled = boolean('disabled', false);

    return ({
      data() {
        return {
          checked: true,
        }
      },
      template: `
      <div>
        <h5>Selected : {{ checked }}</h5>
        <vu-switch
          v-model="checked"
          color="${color}">
        </vu-switch>
      </div>

      `,
      methods: {
        onChange: (value) => action('change')(value),
      }
    });
  })
