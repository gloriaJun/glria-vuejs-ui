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

storiesOf('Components|Nav', module)
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
            { label: 'Item1' },
            { label: 'Item2' },
            { label: 'Item3' },
          ],
        }
      },
      template: `
        <vu-nav>
          <vu-nav-item
            v-for="(item, index) in items"
            :key="index">{{ item.label }}</vu-nav-item>
        </vu-nav>
      `,
      methods: {
        onClick: (e) => action('click button')(e),
      }
    });
  })
