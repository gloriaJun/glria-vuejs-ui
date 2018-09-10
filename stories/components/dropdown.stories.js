import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
} from '@storybook/addon-knobs';

storiesOf('Components|Dropdown', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const hoverable = boolean('hoverable', false);
    const placement = select('placement', [
      'top',
      'left',
      'right',
      'bottom-left',
      'bottom-right',
    ], 'bottom-left');

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
      <div
        class="d-flex align-items-center justify-content-center"
        style="height: 300px">
        <vu-dropdown
          :hoverable="${hoverable}"
          placement="${placement}">
          <vu-button>Dropdown Button</vu-button>
          <template slot="menu">
            <vu-dropdown-item
              v-for="(item, index) in items"
              :key="index"
              :active="item.active"
              :disabled="item.disabled"
              @click="onClick(item)">
              {{ item.label }}
            </vu-dropdown-item>
          </template>
        </vu-dropdown>
      </div>
      `,
      methods: {
        onClick: (item) => action('click item')(item),
      }
    });
  })
 .add('context menu', () => {
    return ({
      data () {
        return {
          items: [
            { label: 'Menu1' },
            { label: 'Menu2' },
          ],
        }
      },
      template: `
        <vu-dropdown>
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
    });
  })
