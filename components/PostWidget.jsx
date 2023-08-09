import moment from "moment";
import Link from "next/link";
import Image from "next/image";

import { getRecentPosts, getSimilarPosts } from "@/services";

async function PostWidget({ slug, categories }) {
  let relatedPost;
  if (slug) {
    relatedPost = await getSimilarPosts(slug, categories);
  } else {
    relatedPost = await getRecentPosts();
  }

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
