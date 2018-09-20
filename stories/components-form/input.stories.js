import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
// import { action } from '@storybook/addon-actions';
// import {
//   boolean,
// } from '@storybook/addon-knobs';

storiesOf('Components-Form|Input', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    // const disabled = boolean('disabled', false);

    return ({
      data() {
        return {
          value: null,
        }
      },
      template: `
      <div>
        <h5>Input Value: {{ value }}</h5>
        <vu-input
          v-model="value"></vu-input>
      </div>
      `,
    });
  })
