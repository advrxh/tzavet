import React from "react";
import { Link } from "gatsby";

const BlogList = ({ blogs = [] }) => {
    return (
        <div className="w-3/4 lg:w-3/6 flex justify-center items-center flex-col">
            {blogs.map((blog) => {
                const { title, slug, date } = blog;
                return (
                    <Link
                        key={slug}
                        to={`/posts/${slug}`}
                        className="w-full flex justify-evenly flex-col my-2"
                    >
                        <div className="h-[2px] w-full bg-[#BDADEA] my-4"></div>
                        <h5 className="hover:underline text-gray-900 font-medium font-serif">
                            {title}
                        </h5>
                        <p className="text-gray-400 font-lato font-light text-sm">
                            {date}
                        </p>

                        <div className="h-[2px] w-full bg-[#BDADEA] my-4"></div>
                    </Link>
                );
            })}
        </div>
    );
};

export default BlogList;
