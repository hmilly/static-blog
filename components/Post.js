import React from "react";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <div
      className="g-box-shadow p-4 rounded-lg shadow-lg grid content-evenly gap-2
    "
    >
      <img src={post.frontmatter.cover_image} alt={post.title}></img>
      <div className="px-1 bg-blue-100">{post.frontmatter.date}</div>
      <h3 className="font-medium p-2 text-blue-700">
        {post.frontmatter.title}
      </h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a
          className="
        bg-blue-800 text-white py-2 px-4 rounded cursor-pointer no-underline focus:no-underline hover:scale-95 place-self-end
        "
        >
          Read more
        </a>
      </Link>
    </div>
  );
}
