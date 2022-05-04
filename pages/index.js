import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import {sortByDate} from "../fns"

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="blog-posts">
        {posts.map((post, i) => (
          <Post key={i} post={post}/>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const mdWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { data: frontmatter } = matter(mdWithMeta);

    return { slug, frontmatter };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
