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
    const title = text('title', 'Card Title');
    const subtitle = text('subtitle', 'subtitle');
    const showAction = boolean('showAction', false);
    const position = select('align', ['left', 'center', 'right'], 'left');

    return ({
      template: `
        <vu-card class="text-${position}">
          <vu-card-body
            title="${title}"
            sub-title="${subtitle}">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </vu-card-body>
          <vu-card-action v-if="${showAction}">
            <vu-button type="link" href="#" color="link">Link</vu-button>
            <vu-button>Button</vu-button>
          </vu-card-action>
        </vu-card>
      `,
    });
  })
  .add('header & footer', () => {
    const position = select('align', ['left', 'center', 'right'], 'left');

    return ({
      template: `
        <vu-card class="text-${position}">
          <div slot="header">Card Header</div>
          <vu-card-body>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </vu-card-body>
          <div
            slot="footer"
            class="text-muted">2 days ago</div>
        </vu-card>
      `,
    });
  })
 .add('image card', () => {
    const position = select('position', ['top', 'bottom'], 'top');
    const imgSrc = text('image src', 'https://picsum.photos/600/300/?image=25');

    return ({
      template: `
        <vu-card>
          <vu-card-media
            v-if="${position === 'top'}"
            src="${imgSrc}">
          </vu-card-media>
          <vu-card-body>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </vu-card-body>
          <vu-card-media
            v-if="${position === 'bottom'}"
            src="${imgSrc}">
          </vu-card-media>
        </vu-card>
      `,
    });
  })
