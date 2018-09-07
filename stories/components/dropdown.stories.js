import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '../constants';

storiesOf('Components|Dropdown', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const hoverable = boolean('hoverable', false);
    const placement = select('placement', [
      'top',
      'bottom',
      'bottom-left',
      'bottom-right',
    ], 'bottom');
    // const active = boolean('active', false);
    // const isLink = boolean('link', false);
    // const isButton = boolean('button', false);

    return ({
      data () {
        return {
          items: [
            { label: 'Menu1' },
            { label: 'Menu2', disabled: true },
            { label: 'Menu3', active: true },
            { label: 'Menu4' },
          ],
        }
      },
      template: `
        <vu-dropdown
          :hoverable="${hoverable}"
          placement="${placement}">
          <vu-button>Dropdown Button</vu-button>
          <template slot="menu">
            <vu-dropdown-item
              v-for="(item, index) in items"
              :key="index">
              {{ item.label }}
            </vu-dropdown-item>
          </template>
        </vu-dropdown>
      `,
      methods: {
        onClick: (e) => action('click button')(e),
      }
    });
  })
