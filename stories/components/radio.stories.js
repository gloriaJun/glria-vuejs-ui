import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  text,
} from '@storybook/addon-knobs';

storiesOf('Components|Form/Radio', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const disabled = boolean('disabled', false);
    const stacked = boolean('stacked', false);
    const value = text('value', 'male');

    return ({
      data() {
        return {
          checked: value,
          items: [
            { text: 'Male', value: 'male' },
            { text: 'FeMale', value: 'female' },
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
            :disabled="${disabled}">{{ item.text }}</vu-radio>
        </vu-radio-group>
      </div>

      `,
      methods: {
        onChange: (value) => action('change')(value),
      }
    });
  })
