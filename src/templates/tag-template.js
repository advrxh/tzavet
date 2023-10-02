import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogList from "../components/Blog List";
import Seo from "../components/seo";

const TagTemplate = ({ data, pageContext }) => {
    const blogs = data.allContentfulPost.nodes;
    return (
        <Layout>
            <Seo title={`${pageContext.tag}`} />
            <main className="max-w-screen-xl w-11/12 mx-auto min-h-3/4 mt-7">
                <h2 className="text-4xl font-serif mb-5">{pageContext.tag}</h2>
                <div>
                    <BlogList blogs={blogs} />
                </div>
            </main>
        </Layout>
    );
};

export default TagTemplate;

export const query = graphql`
    query GetBlogByTag($tag: String) {
        allContentfulPost(
            sort: { fields: date, order: DESC }
            filter: { tags: { eq: $tag } }
        ) {
            nodes {
                author
                category
                date(formatString: "MMMM Do, YYYY")
                thumbnail {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                }
                tags
                title
                slug
            }
        }
    }
`;
