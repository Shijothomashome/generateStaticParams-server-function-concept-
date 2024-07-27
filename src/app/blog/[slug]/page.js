// app/blog/[slug]/page.js

import React from 'react';

// Fetch the blog post data directly on the server side
async function fetchPost(slug) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
    cache: 'no-store', // Ensures fresh data is fetched
  });
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}

// Server Component to display a single blog post
const BlogPost = async ({ params }) => {
  const { slug } = params;
  const post = await fetchPost(slug);

  return (
    <div className='flex flex-col justify-center items-center p-4 m-5 border border-gray-300'>
      <h1 className='text-2xl text-green-400'>Blog Post - {slug}</h1>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogPost;

// Generate static paths at build time
// this generateStaticParams function will work only on server components, and here fetching is done on the server
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}
