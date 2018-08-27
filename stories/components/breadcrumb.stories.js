import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import {
  object,
} from '@storybook/addon-knobs';

storiesOf('Components|Breadcrumb', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const defaultValue = [
      { label: 'Home', href: '/' },
      { label: 'Item1', href: 'item1' },
      { label: 'Item2', href: 'item2' },
      { label: 'Item3', href: 'item3', active: true },
    ];

    return ({
      data() {
        return {
          items: object('item', defaultValue),
        }
      },
      template: `
        <vu-breadcrumb :items="items"></vu-breadcrumb>
      `,
    });
  })
