import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  select,
  number,
} from '@storybook/addon-knobs';

storiesOf('Components|Steps', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const type = select('type', ['line', 'card', 'pills'], 'line');
    const active = number('active', 0);

    return ({
      template: `
        <vu-steps :active="${active}">
          <vu-step-item>
            Step 1
          </vu-step-item>
          <vu-step-item>
            Step 2
          </vu-step-item>
          <vu-step-item>
            Step 3
          </vu-step-item>
        </vu-steps>
      `,
      methods: {
        onClickTab: (index, name) => action('tab-click')(index, name),
      }
    });
  })
