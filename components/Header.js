import React from "react";
import Link from "next/link";

export default function header() {
  return (
    <header className=".mb-10px bg-blue-900 p-2">
      <div className="max-w-screen-md m-auto overflow-auto .py-0 .px-10px">
        <Link href="/">
          <h2 className="underline text-white">Blog</h2>
        </Link>
      </div>
    </header>
  );
}
