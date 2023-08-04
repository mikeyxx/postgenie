"use client";

import { useState, useEffect } from "react";

import moment from "moment";
import Link from "next/link";
import Image from "next/image";

import { getRecentPosts, getSimilarPosts } from "@/services";

function PostWidget({ slug, categories }) {
  const [relatedPost, setRelatedPost] = useState([]);

  // console.log(categories);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(slug, categories).then((result) =>
        setRelatedPost(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPost(result));
    }
  }, [slug]);

  // console.log(relatedPost);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPost.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-i6 flex-none">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              height={60}
              width={60}
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-md transition duration-500 hover:text-pink-600"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostWidget;
