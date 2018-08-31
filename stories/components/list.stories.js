import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '../constants';
const color_type = Object.assign(COLOR_TYPES, {DEFAULT: ''});

storiesOf('Components|List', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const color = select('color', color_type, '');
    const active = boolean('active', false);
    const disabled = boolean('disabled', false);
    const isLink = boolean('link', false);
    const isButton = boolean('button', false);

    return ({
      data () {
        return {
          items: [
            { label: 'Cras justo odio' },
            { label: 'Dapibus ac facilisis in', disabled: true },
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
            :color="index === 1 && '${color}'"
            :href="${isLink} && '#'"
            :button="${isButton}"
            :active="${active} && item.active"
            :disabled="${disabled} && item.disabled">
            {{ item.label }}
          </vu-list-item>
        </vu-list>
      `,
      methods: {
        onClick: (e) => action('click button')(e),
      }
    });
  })
