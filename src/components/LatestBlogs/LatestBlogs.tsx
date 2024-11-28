import BlogCard from "../ui/BlogCard";
import LatestBlogCard from "../ui/LatestBlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
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
      <div className="grid grid-cols-2 w-[90%] mx-auto gap-4">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-3 py-6 w-[90%] mx-auto gap-4">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
