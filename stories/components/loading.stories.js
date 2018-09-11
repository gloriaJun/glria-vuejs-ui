import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import {
  boolean,
  text,
} from '@storybook/addon-knobs';

storiesOf('Components|Loading', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    const loadingText = text('loadingText', 'Loading...');
    const loading = boolean('loading', true);
    const fullscreen = boolean('full screen', false);

    return ({
      template: `
      <div class="border border-danger" style="height: 200px;">
        <vu-loading
          :show="${loading}"
          :is-full-screen="${fullscreen}"
          text="${loadingText}">
        </vu-loading>
      </div>
      `,
    });
  })
  .add('inline button', () => {
    const loading = boolean('loading', true);
    return ({
      template: `
      <vu-button>
        <vu-loading
          :show="${loading}">
        </vu-loading>
        Button Text
      </vu-button>
      `,
    });
  })
  .add('directive', () => {
    return ({
      data() {
        return {
          loading: false,
        }
      },
      template: `
      <div>
        <vu-button @click="loading = !loading">Show Loading</vu-button>
        <div
          v-loading="loading"
          class="border border-danger"
          style="height: 200px;"></div>
      </div>

      `,
    });
  })
  .add('service', () => {
    const loadingText = text('loadingText', 'Loading...');
    const fullscreen = boolean('full screen', false);

    return ({
      data() {
        return {
          loading: false,
        }
      },
      template: `
      <div>
        <vu-button @click="showLoading">Show Loading</vu-button>
        <div
          class="border border-danger"
          style="height: 200px;"></div>
      </div>
      `,
      methods: {
        showLoading() {
        },
      },
    });
  })
