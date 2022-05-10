import React from "react";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <div
      className=" min-w-[300px] p-4 shadow-lg rounded-lg 
      grid gap-2 border"
    >
      <img
        className="w-full h-auto rounded-lg"
        src={post.frontmatter.cover_image}
        alt={post.title}
      />
      <div className="px-1 bg-blue-100">{post.frontmatter.date}</div>
      <h2 className="text-lg p-2 underline text-blue-700">
        {post.frontmatter.title}
      </h2>
      <p className="h-32">{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a
          className=" bg-blue-800 text-white py-2 px-4
          rounded place-self-end cursor-pointer
          focus:no-underline hover:scale-95 
        "
        >
          Read more
        </a>
      </Link>
    </div>
  );
}
