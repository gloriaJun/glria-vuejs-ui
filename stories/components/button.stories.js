import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  selectV2,
  text,
} from '@storybook/addon-knobs';

import { COLOR_TYPES, SIZES } from '../constants';
const color_type = Object.assign(COLOR_TYPES, {LINK: 'link'});

storiesOf('Components|Buttons/Button', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const type = selectV2('type', ['button', 'submit', 'reset', 'link'], 'button');
    const color = selectV2('color', color_type, 'primary');
    const size = selectV2('size', SIZES, '');
    const block = boolean('block', false);
    const outline = boolean('outline', false);
    const round = boolean('round', false);
    const circle = boolean('circle', false);
    const disabled = boolean('disabled', false);

    return ({
      template: `
        <vu-button
          type="${type}"
          color="${color}"
          size="${size}"
          :outline="${outline}"
          :block="${block}"
          :round="${round}"
          :circle="${circle}"
          :disabled="${disabled}"
          @click="onClick">${color || 'default'}</vu-button>
      `,
      methods: {
        onClick: () => action('click button')(),
      }
    });
  })
  .add('link button', () => {
    const color = selectV2('color', color_type, 'link');
    const size = selectV2('size', SIZES, '');
    const block = boolean('block', false);
    const outline = boolean('outline', false);
    const round = boolean('round', false);
    const circle = boolean('circle', false);
    const disabled = boolean('disabled', false);
    const href = text('href', '#');

    return ({
      template: `
        <vu-button
          type="link"
          color="${color}"
          size="${size}"
          href="${href}"
          :outline="${outline}"
          :block="${block}"
          :round="${round}"
          :circle="${circle}"
          :disabled="${disabled}">${color || 'default'}</vu-button>
      `,
    });
  })
  .add('with icon', () => {
    const type = selectV2('type', ['button', 'submit', 'reset', 'link'], 'button');
    const color = selectV2('color', color_type, 'primary');
    const size = selectV2('size', SIZES, '');
    const block = boolean('block', false);
    const outline = boolean('outline', false);
    const round = boolean('round', false);
    const circle = boolean('circle', false);
    const disabled = boolean('disabled', false);

    return ({
      template: `
        <vu-button
          type="${type}"
          color="${color}"
          size="${size}"
          :outline="${outline}"
          :block="${block}"
          :round="${round}"
          :circle="${circle}"
          :disabled="${disabled}">
          <vu-icon icon="check"></vu-icon>Check
        </vu-button>
      `,
    });
  })
