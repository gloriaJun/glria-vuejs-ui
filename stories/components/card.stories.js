import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
} from '@storybook/addon-knobs';

import { COLOR_TYPES } from '../constants';

storiesOf('Components|Card', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    return ({
      template: `
        <vu-card>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </vu-card>
      `,
    });
  })
  .add('with title', () => {
    return ({
      template: `
        <vu-card
          title="Card Title"
          sub-title="card subtitle">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </vu-card>
      `,
    });
  })
  .add('with action', () => {
    const position = select('align', ['left', 'center', 'right'], 'left');

    return ({
      template: `
        <vu-card
          title="Card Title"
          sub-title="card subtitle">
          Some quick example text to build on the card title and make up the bulk of the card's content.
          <vu-card-action position="${position}">
            <vu-button type="link" href="#" color="link">Link</vu-button>
            <vu-button>Button</vu-button>
          </vu-card-action>
        </vu-card>
      `,
    });
  })
  .add('header & footer', () => {
    return ({
      template: `
        <vu-card
          title="Card Title"
          sub-title="card subtitle">
          <div slot="header">Card Header</div>
          Some quick example text to build on the card title and make up the bulk of the card's content.
          <vu-card-action>
            <vu-button type="link" href="#" color="link">Link</vu-button>
            <vu-button>Button</vu-button>
          </vu-card-action>
        </vu-card>
      `,
    });
  })
