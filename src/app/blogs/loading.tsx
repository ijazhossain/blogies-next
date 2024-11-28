import LoadingCard from "@/components/ui/LoadingCard";

const BlogLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return (
    <div>
      {blogs.map((blog: Blog) => (
        <LoadingCard key={blog.id} />
      ))}
    </div>
  );
};

export default BlogLoadingPage;
