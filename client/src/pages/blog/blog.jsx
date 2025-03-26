import React from "react";
import "./blog.css";
import BlogFirst from "./containers/BlogFirst";
import BlogSecond from "./containers/BlogSecond";

const Blog = () => {
  return (
    <div className="blog">
      <BlogFirst />
      <BlogSecond />
    </div>
  );
};

export default Blog;
