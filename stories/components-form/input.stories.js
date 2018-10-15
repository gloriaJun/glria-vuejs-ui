import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
// import { action } from '@storybook/addon-actions';
import {
  selectV2,
  boolean,
  text,
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
    const clearable = boolean('clearable', false);
    const plaintext = boolean('plainText', false);

    return ({
      data() {
        return {
          // value: plaintext ? 'It\'s Plain Text' : null,
          value: 'aaa',
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
          :clearable="${clearable}"
          size="${size}"
          placeholder="Please Input"></vu-input>
      </div>
      `,
    });
  })
  .add('prefix & suffix', () => {
    const status = selectV2('status', {default: '', ...STATUS_TYPES}, '');
    const size = selectV2('size', SIZES, '');
    const round = boolean('round', false);
    const readonly = boolean('readonly', false);
    const disabled = boolean('disabled', false);

    return ({
      template: `
      <div>
        <vu-input
          status="${status}"
          :round="${round}"
          :readonly="${readonly}"
          :disabled="${disabled}"
          prefix-icon="search"
          size="${size}"
          placeholder="Please Input">
        </vu-input>
        
        <vu-input
          suffix-icon="search"
          placeholder="Please Input"
          style="margin-top: .5rem;">
        </vu-input>   
             
        <vu-input
          prefix-icon="search"
          placeholder="Please Input"
          style="margin-top: .5rem;">
          <template slot="prepend">Http://</template>
        </vu-input>
        
        <vu-input
          suffix-icon="search"
          placeholder="Please Input"
          style="margin-top: .5rem;">
          <template slot="append">.00</template>
        </vu-input>
      </div>
      `,
    });
  })
  .add('prepend & append', () => {
    const status = selectV2('status', {default: '', ...STATUS_TYPES}, '');
    const size = selectV2('size', SIZES, '');
    const round = boolean('round', false);
    const readonly = boolean('readonly', false);
    const disabled = boolean('disabled', false);

    return ({
      template: `
      <div>
        <vu-input
          status="${status}"
          :round="${round}"
          :readonly="${readonly}"
          :disabled="${disabled}"
          size="${size}"
          placeholder="Please Input">
          <vu-checkbox slot="prepend"></vu-checkbox>
          <template slot="append">.00</template>
        </vu-input>
        
        <vu-input
          :round="${round}"
          size="${size}"
          placeholder="Please Input"
          style="margin-top: .5rem;">
          <template slot="prepend">Http://</template>
        </vu-input>        
        
        <vu-input
          :round="${round}"
          size="${size}"
          placeholder="Please Input"
          style="margin-top: .5rem;">
          <template slot="append">.00</template>
        </vu-input>
      </div>
      `,
    });
  })
