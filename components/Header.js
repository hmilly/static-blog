import React from "react";
import Link from "next/link";

export default function header() {
  return (
    <header className=".mb-10px bg-blue-900 p-2">
      <div className="max-w-screen-md m-auto overflow-auto .py-0 .px-10px">
        <Link href="/">
          <h1 className="text-xl text-white">Blog</h1>
        </Link>
      </div>
    </header>
  );
}
