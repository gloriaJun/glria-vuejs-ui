import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
} from '@storybook/addon-knobs';

import { COLOR_TYPES, SIZES } from '../constants';

storiesOf('Components|List', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const active = boolean('active', false);

    return ({
      data () {
        return {
          items: [
            { label: 'Cras justo odio' },
            { label: 'Dapibus ac facilisis in' },
            { label: 'Morbi leo risus', active: true },
            { label: 'Porta ac consectetur ac' },
            { label: 'Vestibulum at eros' },
          ],
        }
      },
      template: `
        <vu-list>
          <vu-list-item
            v-for="(item, index) in items"
            :key="index"
            :active="${active} && item.active">
            {{ item.label }}
          </vu-list-item>
        </vu-list>
      `,
      methods: {
        onClick: (e) => action('click button')(e),
      }
    });
  })
