import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
// import { action } from '@storybook/addon-actions';
import {
  selectV2,
  boolean,
} from '@storybook/addon-knobs';

import { STATUS_TYPES, SIZES, INPUT_TYPES } from '../constants';

storiesOf('Components-Form|Input', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const type = selectV2('type', INPUT_TYPES, 'text');
    const status = selectV2('status', {default: '', ...STATUS_TYPES}, '');
    const size = selectV2('size', SIZES, '');
    const round = boolean('round', false);
    const readonly = boolean('readonly', false);
    const disabled = boolean('disabled', false);
    const plaintext = boolean('plaintext', false);

    return ({
      data() {
        return {
          value: plaintext ? 'It\'s Plain Text' : null,
        }
      },
      template: `
      <div>
        <h5>Input Value: {{ value }}</h5>
        <vu-input
          v-model="value"
          type="${type}"
          status="${status}"
          :round="${round}"
          :readonly="${readonly}"
          :disabled="${disabled}"
          :plaintext="${plaintext}"
          size="${size}"
          placeholder="Please Input"></vu-input>
      </div>
      `,
    });
  })
  .add('prepend & append', () => {
    const prepend = boolean('prepend', true);
    const append = boolean('append', true);
    const status = selectV2('status', {default: '', ...STATUS_TYPES}, '');
    const size = selectV2('size', SIZES, '');
    const round = boolean('round', false);
    const readonly = boolean('readonly', false);
    const disabled = boolean('disabled', false);
    const plaintext = boolean('plaintext', false);

    return ({
      template: `
      <div>
        <vu-input
          status="${status}"
          :round="${round}"
          :readonly="${readonly}"
          :disabled="${disabled}"
          :plaintext="${plaintext}"
          size="${size}"
          placeholder="Please Input">
          <template v-if="${prepend}" slot="prepend">$</template>
          <template v-if="${append}"  slot="append">.00</template>
        </vu-input>
      </div>
      `,
    });
  })
