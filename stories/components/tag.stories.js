import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '../constants';

storiesOf('Components|Tag', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const color = select('color', COLOR_TYPES, COLOR_TYPES.PRIMARY);
    const round = boolean('round', false);
    const link = boolean('link', false);
    const closable = boolean('closable', false);

    return ({
      template: `
        <vu-tag
          :round="${round}"
          :link="${link}"
          :closable="${closable}"
          color="${color}"
          @click="onClick"
          @close="onClose">${color}</vu-tag>
      `,
      methods: {
        onClick: () => action('click badge')(),
        onClose: () => action('click close')(),
      },
    });
  })
  .add('with icon', () => {
    const color = select('color', COLOR_TYPES, COLOR_TYPES.PRIMARY);
    const round = boolean('round', false);
    const link = boolean('link', false);
    const closable = boolean('closable', false);

    return ({
      template: `
      <div>
        <vu-tag
          :round="${round}"
          :link="${link}"
          :closable="${closable}"
          color="${color}">
          <vu-icon icon="comments"></vu-icon>
          ${color}
        </vu-tag>
        <vu-tag
          :round="${round}"
          :link="${link}"
          :closable="${closable}"
          color="${color}">
          ${color}
          <vu-icon icon="check"></vu-icon>
        </vu-tag>
      </div>
      `,
    });
  })
