"use client";

import { Categories, CategoryPost, PostWidget } from "@/components";
import { getCategoryPost } from "@/services";
import { useState, useEffect } from "react";

function Category({ params }) {
  const [postCategory, setPostCategory] = useState([]);

  const fetchCategoryPost = async () => {
    const data = await getCategoryPost(params.slug);

    setPostCategory(data);
  };

  useEffect(() => {
    fetchCategoryPost();
  }, [params.slug]);

  return (
    <section className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <article className="col-span-1 lg:col-span-8">
          {postCategory.map((category, index) => (
            <CategoryPost key={index} post={category.node} />
          ))}
        </article>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
