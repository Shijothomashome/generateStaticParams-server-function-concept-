import React from "react";
import Link from "next/link";

const BlogList = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // Ensure that fresh data is fetched.
  });
  const posts = await res.json();
  return (
    <>
    <h1 className="text-3xl font-bold underline">Blog List</h1>
    <div className="space-y-4 p-5">
  {posts.map((post, index) => (
    <div className="flex justify-start items-center gap-2" key={post.id}>
      <p>{index + 1}.</p>
      <Link href={`/blog/${post.id}`} className="block max-w-xs overflow-hidden whitespace-nowrap text-ellipsis text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          {post.title}
      </Link>
    </div>
  ))}
</div>

  </>
  
  );
};

export default BlogList;
