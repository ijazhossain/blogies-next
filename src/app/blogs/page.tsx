"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/baseApi";
import React from "react";

const BlogsPage = () => {
  /* const res = await fetch("http://localhost:5000/blogs", { cache: "no-store" });
  const blogs = await res.json(); */
  const { data: blogs, isLoading, isError } = useGetBlogsQuery([]);
  console.log(blogs);
  return (
    <div>
      <h1 className="text-center my-6 text-4xl">
        Latest Blogs from <span className="text-accent">Blogies</span>
      </h1>
      <p className="w-1/3 mx-auto mb-4 text-center text-gray-400">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>

      <div className="grid grid-cols-3 py-6 w-[90%] mx-auto gap-4">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
