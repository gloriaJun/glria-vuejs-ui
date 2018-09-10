import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';

storiesOf('Components|Navbar', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => {
    return ({
      data () {
        return {
        }
      },
      template: `
        <vu-navbar brand-name="BrandName">
        </vu-navbar>
      `,
    });
  })
  .add('brand with image', () => {
    return ({
      data () {
        return {
        }
      },
      template: `
        <vu-navbar>
          <template slot="brand">
            <img src="https://vuejs.org/images/logo.png" width="30" height="30" class="d-inline-block align-top">
            BrandName
          </template>
        </vu-navbar>
      `,
    });
  })
  .add('collapse menu', () => {
    return ({
      data () {
        return {
        }
      },
      template: `
        <vu-navbar brand-name="BrandName">
          <vu-navbar-nav>
            <vu-nav-item>Home</vu-nav-item>
            <vu-nav-item>Features</vu-nav-item>
            <vu-nav-item dropdown>
              Dropdown
              <template slot="dropdown-menu">
                <vu-dropdown-item>Menu1</vu-dropdown-item>
                <vu-dropdown-item>Menu2</vu-dropdown-item>
              </template>
            </vu-nav-item>
          </vu-navbar-nav>
        </vu-navbar>
      `,
    });
  })
