import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
// import { action } from '@storybook/addon-actions';
import {
  select,
} from '@storybook/addon-knobs';

storiesOf('Components|Tabs', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const type = select('type', ['', 'card', 'pills'], '');

    return ({
      template: `
        <vu-tabs
          type="${type}">
          <vu-tab-item label="Information">
            <h2>This is Information</h2>
          </vu-tab-item>
          <vu-tab-item label="Location">
            <h2>This is Location</h2>
          </vu-tab-item>
          <vu-tab-item label="About" disabled>
            <h2>This is About</h2>
          </vu-tab-item> 
          <vu-tab-item label="Q&A">
            <h2>This is Q&A"</h2>
          </vu-tab-item>
        </vu-tabs>
      `,
    });
  })
