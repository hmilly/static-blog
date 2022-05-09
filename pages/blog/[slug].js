import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/dist/client/link";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Link href="/">
        <a className="bg-gray-300 py-2 px-3 m-3 border-2 rounded border-blue-900 cursor-pointer no-underline focus:no-underline  hover:scale-95 ">
          Go Back
        </a>
      </Link>
      <div className="my-5">
        <h1 className="font-medium p-2 text-blue-700 text-center">{title}</h1>
        <div className="px-1 bg-blue-100 my-3">Posted on: {date}</div>
        <img src={cover_image} alt={title} />
        <div className="blog-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const mdWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(mdWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
