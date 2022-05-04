import React from "react";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="card">
      <img src={post.frontmatter.cover_image} alt={post.title}></img>
      <div className="blog-date">{post.frontmatter.date}</div>
      <h3 className="blog-title">{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a className="btn">Read more</a>
      </Link>
    </div>
  );
}
