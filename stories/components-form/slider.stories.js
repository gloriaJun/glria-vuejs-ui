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

    return ({
      data() {
        return {
          value: value,
        }
      },
      template: `
      <div>
        <h5>value : {{ value }}</h5>
        <vu-slider
          v-model="value"
          :disabled="${disabled}"></vu-slider>
      </div>

      `,
      methods: {
        onChange: (value) => action('change')(value),
      }
    });
  })
