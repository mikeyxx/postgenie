import PageElements from "@/components/PageElements";
import FeaturedPosts from "@/sections/FeaturedPosts";
import { getPosts } from "@/services";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="container mx-auto px-10 mb-8 ">
      <FeaturedPosts />
      <PageElements posts={posts} />
    </main>
  );
}
