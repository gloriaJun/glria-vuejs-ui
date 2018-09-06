import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '../constants';

storiesOf('Components|Pagination', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const total = number('total', 26, { min: 0 });
    // const pageSize = select('pageSize', [10, 20, 30, 50], 10);
    const current = number('current', 1, { min: 1 });
    const border = boolean('border', false);

    return ({
      data() {
        return {
          current: current,
        }
      },
      template: `
      <div>
        <h5>Current Page : {{ current }}</h5>
        <vu-pagination
          v-model="current" 
          :total="${total}"
          :border="${border}"></vu-pagination>
      </div>
      `,
      methods: {
        onClick: () => action('click badge')(),
        onClose: () => action('click close')(),
      },
    });
  })
