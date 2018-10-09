module.exports = {
  base: '/glria-vuejs-ui/',
  title: 'Gvu',
  description: 'GVu Components',
  themeConfig: {
    repo: 'gloriaJun/glria-vuejs-ui',
    docsDir: 'docs',
    sidebar: [
      {
        title: 'Content',
        collapsable: false,
        children: [
          '/content/Typography',
        ],
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/Alert',
          '/components/Avatar',
          '/components/Badge',
          '/components/Breadcrumb',
          '/components/Button',
          '/components/ButtonGroup',
          '/components/Card',
          '/components/Dropdown',
          '/components/Icon',
          '/components/List',
          '/components/Loading',
          '/components/Nav',
          '/components/Navbar',
          '/components/Pagination',
          '/components/Progress',
          '/components/Steps',
          '/components/Tabs',
          '/components/Tag',
        ],
      },
      {
        title: 'Components - Form',
        collapsable: false,
        children: [
          '/components-form/Checkbox',
          '/components-form/Input',
          // '/components-form/Radio',
          // '/components-form/Slider',
          // '/components-form/Switch',
        ],
      },
    ],
  },
};
