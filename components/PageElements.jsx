"use client";

import { useState, useEffect } from "react";

import { Categories, PostCard, PostWidget } from ".";
import { getPosts } from "@/services";

function PageElements() {
  const [posts, setPosts] = useState([]);

  const getFetchedPost = async () => {
    const data = await getPosts();

    setPosts(data);
  };

  useEffect(() => {
    getFetchedPost();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <section className="lg:col-span-8 col-span-1">
        {posts.map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))}
      </section>
      <section className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">
          <PostWidget />

          <Categories />
        </div>
      </section>
    </div>
  );
}

export default PageElements;
