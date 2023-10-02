import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BlogList from "../Blog List";

const response = graphql`
    {
        allContentfulPost(sort: { fields: date, order: DESC }) {
            nodes {
                author
                date(formatString: "MMMM Do, YYYY")
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
