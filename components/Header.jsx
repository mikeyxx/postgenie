"use client";

import Link from "next/link";

import { useState, useEffect } from "react";
import { getCategories } from "@/services";

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <header className="container mx-auto px-10 mb-8">
      <nav className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              PostGenie
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-500 hover:text-pink-500">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
