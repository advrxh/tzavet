const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query GetBlog {
            allContentfulPost {
                nodes {
                    slug
                }
            }
        }
    `);

    result.data.allContentfulPost.nodes.forEach((blog) => {
        createPage({
            path: `/posts/${blog.slug}`,
            component: path.resolve(`src/templates/blog-template.js`),
            context: {
                slug: blog.slug,
            },
        });
    });
};
