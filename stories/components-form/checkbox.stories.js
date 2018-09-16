import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
} from '@storybook/addon-knobs';

storiesOf('Components-Form|Checkbox', module)
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

        <div style="margin-top: 2rem;">
          <vu-checkbox>
            <vu-icon icon="book"></vu-icon>&nbsp;Book
          </vu-checkbox>
          <vu-checkbox>
            <vu-avatar src="https://vuematerial.io/assets/examples/avatar.png"></vu-avatar>
          </vu-checkbox>
        </div>
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
          checked: ['Pink'],
          items: [
            {label: 'Red', value: 'Red'},
            {label: 'Green', value: 'Green'},
            {label: 'Blue', value: 'Blue'},
            {label: 'Pink', value: 'Pink'}
          ],
        }
      },
      template: `
      <div>
        <h5>Selected : {{ checked }}</h5>
        <vu-checkbox-group v-model="checked" :stacked="${stacked}">
          <vu-checkbox
            v-for="item in items"
            :key="item.text"
            :checked-value="item.value">{{ item.label }}</vu-checkbox>
        </vu-checkbox-group>
        
        <h6 style="margin-top: 2rem;">using by options</h6>
        <vu-checkbox-group
          v-model="checked"
          :options="items"
          :stacked="${stacked}"></vu-checkbox-group>
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
        <vu-checkbox-group v-model="checked" stacked>
          <vu-checkbox
            v-for="(item, index) in items"
            :key="index"
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
