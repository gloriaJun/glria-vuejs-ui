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
    const value = boolean('value', true);
    const showLabel = boolean('showLabel', false);
    const disabled = boolean('disabled', false);

    return ({
      data() {
        return {
          checked: value,
          checked2: 'on',
        }
      },
      template: `
      <div>
        <h5>Selected : {{ checked }}</h5>
        <vu-switch
          v-model="checked"
          :show-label="${showLabel}"
          :disabled="${disabled}"
          color="${color}"
          @change="onChange">
        </vu-switch>
        <h5 style="margin-top: 1rem;">Selected : {{ checked2 }}</h5>
        <vu-switch
          v-model="checked2"
          :disabled="${disabled}"
          color="${color}"
          checked-value="on"
          unchecked-value="off"
          show-label
          @change="onChange">
        </vu-switch>
      </div>

      `,
      methods: {
        onChange: (value) => action('switch')(value),
      }
    });
  })
