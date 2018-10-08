import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  selectV2,
  text,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '../constants';

storiesOf('Components|Alert', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const color = selectV2('color', COLOR_TYPES, COLOR_TYPES.PRIMARY);
    const title = text('title', '');
    const closable = boolean('closable', false);
    const showIcon = boolean('showIcon', false);
    const icon= text('icon', '');

    return ({
      template: `
        <vu-alert
          :closable="${closable}"
          :show-icon="${showIcon}"
          color="${color}"
          title="${title}"
          icon="${icon}"
          @close="alertClose">
          A simple ${color} alert
          Aww yeah, you successfully read this important alert message. 
          This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
        </vu-alert>
      `,
      methods: {
        alertClose: () => action('click alert close')(),
      }
    });
  })
