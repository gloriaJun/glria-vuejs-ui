const path = require('path');

module.exports = {
  // version: '1.1.1',
  title: 'Gvu UI Component',
  pagePerSection: true,
  // skipComponentsWithoutExample: true,
  sections: [
    { name: 'Typography', content: 'docs/Typography.md', },
    {
      name: 'Components',
      components: () => [
        './src/components/Alert/Alert.vue',
        './src/components/Avatar/Avatar.vue',
        './src/components/Badge/Badge.vue',
        './src/components/Breadcrumb/Breadcrumb.vue',
        './src/components/Icon/Icon.vue',
        './src/components/Progress/Progress.vue',
      ],
      sections: [
        { name: 'Buttons', components: './src/components/Button*/*.vue' },
        { name: 'Card', components: 'src/components/Card/*.vue' },
        { name: 'List', components: 'src/components/List/*.vue' },
      ],
    }
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.vue');
    return `import { ${name} } from 'gvu';`;
  },
  editorConfig: 'material',
  styles: {
    Markdown: {
      code: {
        padding: '0.2em 0.5em',
        border: '1px solid rgba(0,0,0,0.05)',
        margin: 0,
        fontSize: '85%',
        backgroundColor: 'rgba(27,31,35,0.05)',
        borderRadius: '3px'
      }
    },
    StyleGuide: {
      content: {
        maxWidth: '100%'
      }
    }
  },
  require: [
    path.join(__dirname, 'src/styles/index.scss'),
    path.join(__dirname, 'src/main.js'),
  ],
  usageMode: 'expand',
  exampleMode: 'collapse',
  // build setting
  styleguideDir: 'dist-doc',
  // styleguidePublicPath: '/',
  template: {
    head: {
      links: [{
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css',
      }],
    },
  },
};
