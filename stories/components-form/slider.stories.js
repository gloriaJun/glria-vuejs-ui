import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  number,
} from '@storybook/addon-knobs';

storiesOf('Components-Form|Slider', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const disabled = boolean('disabled', false);
    // const stacked = boolean('stacked', false);
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
        <vu-slider
          v-model="value"
          :min="${min}"
          :max="${max}"
          :disabled="${disabled}"></vu-slider>
      </div>

      `,
      methods: {
        onChange: (value) => action('change')(value),
      }
    });
  })
