import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  text,
} from '@storybook/addon-knobs';

storiesOf('Components|Loading', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const loadingText = text('loadingText', 'Loading...');
    const loading = boolean('loading', true);

    return ({
      template: `
      <div class="border border-danger" style="height: 200px;">
        <vu-loading
          :show="${loading}"
          text="${loadingText}">
        </vu-loading>
      </div>
      `,
    });
  })
