import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '../constants';

storiesOf('Components|Form/Checkbox', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const disabled = boolean('disabled', false);
    const indeterminate = boolean('indeterminate', false);

    return ({
      data() {
        return {
          checked: true,
          checked2: 'male',
        }
      },
      template: `
      <div>
        <vu-checkbox
          v-model="checked"
          :disabled="${disabled}"
          :indeterminate="${indeterminate}"
          @change="onChange">
          Checkbox : {{ checked }}
        </vu-checkbox>
        <vu-checkbox
          v-model="checked2"
          checked-value="male"
          un-checked-value="female"
          @change="onChange">
          Gender : {{ checked2 }}
        </vu-checkbox>
      </div>
      `,
      methods: {
        onChange: (value) => action('change')(value),
      }
    });
  })
  .add('group', () => {
    const stacked = boolean('stacked', false);

    return ({
      data() {
        return {
          checked: [],
          items: [
            {text: 'Red', value: 'Red'},
            {text: 'Green', value: 'Green'},
            {text: 'Blue', value: 'Blue'},
            {text: 'Pink', value: 'Pink'}
          ],
        }
      },
      template: `
      <div>
        <h5>Selected : {{ checked }}</h5>
        <vu-checkbox-group :stacked="${stacked}">
          <vu-checkbox
            v-for="item in items"
            :key="item.text"
            v-model="checked"
            :checked-value="item.value">{{ item.text }}</vu-checkbox>
        </vu-checkbox-group>
      </div>
      `,
    });
  })
  .add('all check', () => {
    return ({
      data() {
        return {
          checkedAll: false,
          indeterminate: false,
          checked: [],
          items: ['Red', 'Green', 'Blue'],
        }
      },
      template: `
      <div>
        <h5>Selected : {{ checked }}</h5>
        <vu-checkbox
          v-model="checkedAll"
          :indeterminate="indeterminate"
          @change="onChangeCheckAll">All</vu-checkbox>
        <vu-checkbox-group stacked>
          <vu-checkbox
            v-for="(item, index) in items"
            :key="index"
            v-model="checked"
            :checked-value="item">{{ item }}</vu-checkbox>
        </vu-checkbox-group>
      </div>
      `,
      watch: {
        checked(value) {
          const checkedCount = value.length;
          const arrayCount = this.items.length;
          this.checkedAll = checkedCount === arrayCount;
          this.indeterminate = checkedCount > 0 && checkedCount < arrayCount;
        },
      },
      methods: {
        onChangeCheckAll(value) {
          this.checked = value ? this.items : [];
          this.indeterminate = false;
        },
      },
    });
  })
