const path = require('path');

module.exports = {
  // set your styleguidist configuration here
  title: 'Gvu UI Component',
  sections: [
    {
      name: 'Basic',
      sections: [
        {
          name: 'Typography',
          content: 'docs/basic/typography.md',
        },
      ],
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
  // webpackConfig: {
  //   // custom config goes here
  // }
  defaultExample: true,
  showUsage: true,
  showCode: true,
};
