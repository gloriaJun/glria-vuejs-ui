import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
} from '@storybook/addon-knobs';

storiesOf('Components|Nav', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const vertical = boolean('vertical', false);

    return ({
      data () {
        return {
          items: [
            { label: 'Item1' },
            { label: 'Item2' },
            { label: 'Item3' },
            { label: 'Item4', disabled: true },
          ],
        }
      },
      template: `
        <vu-nav
          :vertical="${vertical}">
          <vu-nav-item
            v-for="(item, index) in items"
            :key="index"
            :disabled="item.disabled">{{ item.label }}</vu-nav-item>
        </vu-nav>
      `,
    });
  })
