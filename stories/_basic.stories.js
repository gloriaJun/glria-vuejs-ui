import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';

storiesOf('Basic|Typography', module)
  .addDecorator(VueInfoAddon)
  .add('Heading', () => {
    return ({
      template: `
  <div>
    <h1>h1. heading</h1>
    <h2>h2. heading</h2>
    <h3>h3. heading</h3>
    <h4>h4. heading</h4>
    <h5>h5. heading</h5>
    <h6>h6. heading</h6>
  </div>
      `,
    });
  })
