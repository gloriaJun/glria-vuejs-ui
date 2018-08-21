const path = require('path');

module.exports = {
  // set your styleguidist configuration here
  title: 'Gvu UI Component',
  sections: [
    {
      name: 'Typography',
      content: 'docs/Typography.md',
    },
    {
      name: 'Components',
      components: 'src/components/**/[A-Z]*.vue',
    }
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.vue');
    return `import { ${name} } from 'gvu';`;
  },
  highlightTheme: 'material',
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
  // webpackConfig: {
  //   // custom config goes here
  // }
  defaultExample: true,
  showUsage: true,
  showCode: true,
};
