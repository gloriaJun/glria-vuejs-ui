import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import {
  number,
  text,
} from '@storybook/addon-knobs';

storiesOf('Components|Avatar', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const size = number('size', 50);
    const letter = text('text', 'A');
    const bgColor = text('bgColor', '#9e9e9e');
    const textColor = text('textColor', '#ffffff');

    return ({
      template: `
        <section>
          <vu-avatar
            src="https://vuematerial.io/assets/examples/avatar.png"
            :size="${size}"></vu-avatar>
          <vu-avatar
            bg-color="${bgColor}"
            icon="home"></vu-avatar>
          <vu-avatar
            bg-color="${bgColor}"
            text-color="${textColor}"
            text="${letter}"></vu-avatar>
        </section>
      `,
    });
  })
