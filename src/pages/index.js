import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import AllBlogs from "../components/All Blogs";
import Seo from "../components/seo";

const IndexPage = () => {
    return (
        <Layout>
            <Seo title="hello" />
            <AllBlogs />
        </Layout>
    );
};

export default IndexPage;
