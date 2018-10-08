import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  selectV2,
  boolean,
} from '@storybook/addon-knobs';

storiesOf('Components|Tabs', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const type = selectV2('type', ['line', 'card', 'pills'], 'line');
    const align = selectV2('align', ['left', 'center', 'right'], 'left');
    const expanded = boolean('expanded', false);

    return ({
      template: `
        <vu-tab
          :expanded="${expanded}"
          type="${type}"
          align="${align}"
          @tab-click="onClickTab">
          <vu-tab-item>
            <template slot="label">
              <vu-icon icon="info-circle"></vu-icon>
              Information
            </template>
            <h2>This is Information</h2>
          </vu-tab-item>
          <vu-tab-item label="Location" name="location" active>
            <h2>This is Location</h2>
          </vu-tab-item>
          <vu-tab-item label="About" disabled>
            <h2>This is About</h2>
          </vu-tab-item> 
          <vu-tab-item label="Q&A">
            <h2>This is Q&A</h2>
          </vu-tab-item>
        </vu-tab>
      `,
      methods: {
        onClickTab: (index, name) => action('tab-click')(index, name),
      }
    });
  })
