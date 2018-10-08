import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean, selectV2,
  text,
} from '@storybook/addon-knobs'

import { COLOR_TYPES, SIZES } from '../constants';

storiesOf('Components-Form|Radio', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const disabled = boolean('disabled', false);
    const allDisabled = boolean('allDisabled', false);
    const stacked = boolean('stacked', false);
    const value = text('value', 'male');

    return ({
      data() {
        return {
          checked: value,
          items: [
            { label: 'Male', value: 'male' },
            { label: 'FeMale', value: 'female', disabled: disabled },
          ],
        }
      },
      template: `
      <div>
        <h5>Selected : {{ checked }}</h5>
        <vu-radio-group
          v-model="checked"
          :stacked="${stacked}">
          <vu-radio
            v-for="(item, index) in items"
            :key="index"
            :checked-value="item.value"
            :disabled="item.disabled || ${allDisabled}">{{ item.label }}</vu-radio>
        </vu-radio-group>
        
        <h6 style="margin-top: 2rem;">using by options</h6>
        <vu-radio-group
          v-model="checked"
          :options="items"
          :disabled="${allDisabled}"
          :stacked="${stacked}"></vu-radio-group>
      </div>

      `,
      methods: {
        onChange: (value) => action('change')(value),
      }
    });
  })
  .add('button Style', () => {
    const disabled = boolean('disabled', false);
    const allDisabled = boolean('allDisabled', false);
    const stacked = boolean('stacked', false);
    const value = text('value', 'adult');
    const color = selectV2('color', COLOR_TYPES, 'primary')
    const size = selectV2('size', SIZES, '')

    return ({
      data() {
        return {
          checked: value,
          items: [
            { label: 'Baby', value: 'baby' },
            { label: 'Child', value: 'child', disabled: disabled },
            { label: 'Adult', value: 'adult' },
          ],
        }
      },
      template: `
      <div>
        <h5>Selected : {{ checked }}</h5>
        <vu-radio-group
          v-model="checked"
          :options="items"
          :disabled="${allDisabled}"
          :stacked="${stacked}"
          color="${color}"
          size="${size}"
          buttonStyle/>
      </div>

      `,
      methods: {
        onChange: (value) => action('change')(value),
      }
    });
  })
