import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '../constants';

storiesOf('Components|Badge', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const value = text('value', '5');
    const position = select('position', ['right', 'left'], 'right');
    const color = select('color', COLOR_TYPES, COLOR_TYPES.ERROR);
    const overlap = boolean('overlap', false);

    return ({
      template: `
      <div>
        <vu-badge
          :overlap="${overlap}"
          value="${value}"
          position="${position}"
          color="${color}"
          style="margin: 1rem;"
          @click="onClick">
          ${color}
        </vu-badge>
        <vu-badge
          :overlap="${overlap}"
          value="${value}"
          position="${position}"
          color="${color}"
          style="margin: 1rem;"
          @click="onClick">
          <vu-avatar icon="home"></vu-avatar>
        </vu-badge>
        <vu-badge
          :overlap="${overlap}"
          position="${position}"
          color="${color}"
          style="margin: 1rem;"
          @click="onClick">
          <vu-button>Button</vu-button>
          <vu-icon slot="badge" icon="info"></vu-icon>
        </vu-badge>
      </div>
      `,
      methods: {
        onClick: () => action('click badge')(),
      },
    });
  })
