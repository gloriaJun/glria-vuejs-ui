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

storiesOf('Components-Form|Form', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    // const color = select('color', COLOR_TYPES, 'primary');
    // const showStep = boolean('show step', false);
    // const disabled = boolean('disabled', false);
    // const value = number('value', 20);
    // const min = number('min', 0);
    // const max = number('max', 100);

    return ({
      data() {
        return {
          model: {
            username: '',
            gender: 'male',
            enabled: false,
          },
          items: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ],
        }
      },
      template: `
      <div>
        <vu-form
          @submit="onSubmit"
          @reset="onReset">
          <vu-form-group
            label="Username"
            help-text="This is help Text">
            <vu-input v-model="model.username"></vu-input>
          </vu-form-group>
          <vu-form-group
            label="Gender">
             <vu-radio-group
                v-model="model.gender"
                :options="items"/>
          </vu-form-group>
          <vu-form-group>
            <vu-checkbox v-model="model.enabled">Enable</vu-checkbox>
          </vu-form-group>
          <vu-button type="submit">Submit</vu-button>
          <vu-button type="reset">Reset</vu-button>
        </vu-form>
        <div>
          <b>Submit Data</b>
          <p>{{ model }}</p>
        </div>
      </div>
      `,
      methods: {
        onSubmit: () => action('submit')(),
        onReset: () => action('reset')(),
      }
    });
  })
