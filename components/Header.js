import React from "react";
import Link from "next/link"

export default function header() {
  return (
    <header>
      <div className="container">
        <Link href="/">
            <h2>Blog</h2>
        </Link>
      </div>
    </header>
  );
}
