/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require('path');

module.exports = {
  plugins: [
    `gatsby-plugin-sass`, {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
        assets: path.join(__dirname, 'src/assets'),
        styles: path.join(__dirname, 'src/styles')
      }
    }
  ],
}
