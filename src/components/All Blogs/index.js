import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BlogList from "../Blog List";
import TagList from "../Tag List";

const response = graphql`
    {
        allContentfulPost(sort: { fields: date, order: DESC }) {
            nodes {
                author
                category
                date(formatString: "MMMM Do, YYYY")
                thumbnail {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        placeholder: TRACED_SVG
                    )
                }
                tags
                title
                slug
            }
        }
    }
`;
const AllBlogs = () => {
    const data = useStaticQuery(response);
    const blogs = data.allContentfulPost.nodes;

    return (
        <div className="w-full flex justify-center items-center">
            <BlogList blogs={blogs} />
        </div>
    );
};

export default AllBlogs;
