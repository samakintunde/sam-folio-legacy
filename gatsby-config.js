const environment = process.env.NODE_ENV || 'development';

if (environment === 'development') {
  require('dotenv').config({
    path: `.env.${environment}`,
  });
}

module.exports = {
  siteMetadata: {
    title: 'Sam Folio',
    siteUrl: 'https://samakintunde.design',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#147dff',
        theme_color: '#147dff',
        display: 'minimal-ui',
        icon: 'src/images/samakintunde.ico', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-126222849-2',
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
