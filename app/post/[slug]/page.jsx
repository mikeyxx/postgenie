import { getPostDetails } from "@/services";

import {
  Categories,
  PostWidget,
  PostDetail,
  Comments,
  CommentsForm,
  Author,
} from "@/components";

async function PostDetails({ params }) {
  const post = await getPostDetails(params.slug);

  return (
    <section className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <article className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </article>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostDetails;
