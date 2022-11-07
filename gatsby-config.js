module.exports = {
  siteMetadata: {
    title: 'Fenna',
    description: 'Coming soon ...',
    author: '@davidsemakula',
    siteUrl: 'https://fenna.tech',
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Fenna',
        short_name: 'Fenna',
        start_url: '/',
        background_color: '#663399',
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: 'minimal-ui',
        icon: 'src/images/rocket.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap',
        serialize: ({ path, modifiedGmt }) => ({
          url: path,
          lastmod: modifiedGmt ? modifiedGmt : '2022-11-07',
        }),
      },
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-client-side-redirect',
  ],
};
