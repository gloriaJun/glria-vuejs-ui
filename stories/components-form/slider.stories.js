import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  number,
  select,
  array,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '../constants';

storiesOf('Components-Form|Slider', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const color = select('color', COLOR_TYPES, 'primary');
    const showStep = boolean('show step', false);
    const disabled = boolean('disabled', false);
    const value = number('value', 20);
    const min = number('min', 0);
    const max = number('max', 100);

    return ({
      data() {
        return {
          value: value,
        }
      },
      template: `
      <div>
        <input type="number" min=0 max=100 v-model="value">
        <div>Value : <strong>{{ value }}</strong></div>
        <vu-slider
          v-model="value"
          color="${color}"
          :min="${min}"
          :max="${max}"
          :showStep="${showStep}"
          :disabled="${disabled}"
          @change="onChange"></vu-slider>
      </div>
      `,
      methods: {
        onChange: (value) => action('change')(value),
      }
    });
  })
  .add('range', () => {
    const showStep = boolean('show step', false);
    const disabled = boolean('disabled', false);
    const value1 = number('value1', 5.5);
    const value2 = number('value2', 2);
    const min = number('min', 0);
    const max = number('max', 10);

    return ({
      data() {
        return {
          values: [value1, value2],
        }
      },
      template: `
      <div>
        <div>Value : <strong>{{ values }}</strong></div>
        <vu-slider
          v-model="values"
          :min="${min}"
          :max="${max}"
          :showStep="${showStep}"
          :disabled="${disabled}"
          @change="onChange"></vu-slider>
      </div>
      `,
      methods: {
        onChange: (value) => action('change')(value),
      }
    });
  })
