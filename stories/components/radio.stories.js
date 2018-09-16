import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
} from '@storybook/addon-knobs';

storiesOf('Components|Form/Radio', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    // const disabled = boolean('disabled', false);

    return ({
      data() {
        return {
          checked: true,
        }
      },
      template: `
      <div>
        <vu-radio></vu-radio>
      </div>
      `,
      methods: {
        onChange: (value) => action('change')(value),
      }
    });
  })
  .add('group', () => {
    const stacked = boolean('stacked', false);

    return ({
      data() {
        return {
          checked: [],
          items: [
            {text: 'Red', value: 'Red'},
            {text: 'Green', value: 'Green'},
            {text: 'Blue', value: 'Blue'},
            {text: 'Pink', value: 'Pink'}
          ],
        }
      },
      template: `
      <div>
      </div>
      `,
    });
  })
