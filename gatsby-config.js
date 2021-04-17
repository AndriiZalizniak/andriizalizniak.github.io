/**
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path');

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
        assets: path.join(__dirname, 'src/assets'),
        styles: path.join(__dirname, 'src/styles')
      }
    }
  ],
}
