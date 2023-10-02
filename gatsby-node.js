const path = require("path");
const slugify = require("slugify");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query GetBlog {
            allContentfulPost {
                nodes {
                    tags
                    slug
                }
            }
        }
    `);

    result.data.allContentfulPost.nodes.forEach((blog) => {
        blog.tags.forEach((tag) => {
            const tagSlug = slugify(tag, { lower: true });
            createPage({
                path: `/tags/${tagSlug}`,
                component: path.resolve(`src/templates/tag-template.js`),
                context: {
                    tag: tag,
                },
            });
        });
    });

    result.data.allContentfulPost.nodes.forEach((blog) => {
        createPage({
            path: `/blogs/${blog.slug}`,
            component: path.resolve(`src/templates/blog-template.js`),
            context: {
                slug: blog.slug,
            },
        });
    });
};
