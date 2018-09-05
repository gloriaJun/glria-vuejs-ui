import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
// import { action } from '@storybook/addon-actions';
import {
  number,
} from '@storybook/addon-knobs';

storiesOf('Components|Steps', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const active = number('active', 0, {
      range: true,
      min: 0,
      max: 2,
      step: 1,
    });

    return ({
      template: `
        <vu-step :active="${active}">
          <vu-step-item>
            Step 1
          </vu-step-item>
          <vu-step-item>
            Step 2
          </vu-step-item>
          <vu-step-item>
            Step 3
          </vu-step-item>
        </vu-step>
      `,
    });
  })
  .add('with title', () => {
    return ({
      data() {
        return {
          active: 0,
        }
      },
      template: `
      <div>
        <vu-step :active="active">
          <vu-step-item title="Step 1" icon="edit">
            Step 1
          </vu-step-item>
          <vu-step-item title="Step 2" description="description">
            Step 2
          </vu-step-item>
          <vu-step-item title="Step 3">
            Step 3
          </vu-step-item>
        </vu-step>
        <vu-button
          :disabled="active === 2"
          style="margin-top: 1rem;"
          @click="active++">Next</vu-button>
      </div>
      `,
    });
  })
