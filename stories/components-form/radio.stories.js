import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  text,
} from '@storybook/addon-knobs';

storiesOf('Components-Form|Radio', module)
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
            :disabled="${disabled}">{{ item.label }}</vu-radio>
        </vu-radio-group>
        
        <h6 style="margin-top: 2rem;">using by options</h6>
        <vu-radio-group
          v-model="checked"
          :options="items"
          :stacked="${stacked}"></vu-radio-group>
      </div>

      `,
      methods: {
        onChange: (value) => action('change')(value),
      }
    });
  })
