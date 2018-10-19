const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = `./src/templates/post.js`;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: `/stories/${node.slug}`,
          component: path.resolve(postTemplate),
          context: {
            slug: node.slug,
          },
        });
      });
    });
    resolve();
  });
};
