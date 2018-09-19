import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';

import { SIZES, ALIGNMENT } from '../constants';

storiesOf('Components|Pagination', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const total = number('total', 286, { min: 0 });
    const perPage = select('perPage', ['10', '20', '30', '50'], '10');
    const current = number('current', 1, { min: 1 });
    const border = boolean('border', false);
    const size = select('size', SIZES, '');
    const align = select('align', ALIGNMENT, ALIGNMENT.LEFT);

    return ({
      template: `
      <vu-pagination
        :value ="${current}" 
        :border="${border}"
        :total="${total}"
        :per-page="${parseInt(perPage)}"
        size="${size}"
        align="${align}"
        @page-change="onChange"></vu-pagination>
      `,
      methods: {
        onChange: (current) => action('click page')(current),
      },
    });
  })
