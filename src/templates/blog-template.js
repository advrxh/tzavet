import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";
import Seo from "../components/seo";

const BlogTemplate = ({ data }) => {
    const blogs = data.allContentfulPost.nodes[0];
    const { title, blog, author, date } = blogs;

    const options = {
        renderNode: {
            [INLINES.HYPERLINK]: (node) => {
                return (
                    <a
                        href={node.data.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "blue", textDecoration: "underline" }}
                    >
                        {node.content[0].value}
                    </a>
                );
            },
        },
    };
    return (
        <Layout>
            <Seo title={title} />
            <div className="w-full flex justify-center items-center">
                <a
                    href="/"
                    class="text-xl my-2 hover:underline text-[#BDADEA] font-rubik flex flex-row justify-around w-24"
                >
                    /home{" "}
                </a>
            </div>
            <main className="max-w-screen-xl w-11/12 mx-auto mt-7 mb-20">
                <section className="bg-white p-5">
                    <div className="mx-auto w-full">
                        <h2 className="text-xl text-[#BDADEA] md:text-4xl font-bold my-10 mb-5 text-center font-serif tracking-wider">
                            {title}
                        </h2>
                        <div className="w-full mx-auto flex items-center justify-center">
                            <p className="font-serif text-sm text-gray-500">
                                {author}
                            </p>
                            <span className="bg-gray-500 w-2 h-2 rounded-lg mx-3">
                                .
                            </span>
                            <p className="font-serif text-sm text-gray-500">
                                {date}
                            </p>
                        </div>
                        <div className="mt-3 p-10 font-lato text-gray-900 leading-7">
                            {renderRichText(blog, options)}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default BlogTemplate;

export const query = graphql`
    query GetBlogBySlug($slug: String) {
        allContentfulPost(filter: { slug: { eq: $slug } }) {
            nodes {
                author
                date(formatString: "MMMM Do, YYYY")
                title
                slug
                blog {
                    raw
                }
            }
        }
    }
`;
