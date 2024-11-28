import BlogDetails from "@/components/ui/BlogDetails";
import React from "react";
interface BlogID {
  params: { blogId: string };
}
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
};
const BlogDetailsPage = async ({ params }: BlogID) => {
  //console.log(params);
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
