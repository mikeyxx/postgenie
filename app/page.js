import PageElements from "@/components/PageElements";
import FeaturedPosts from "@/sections/FeaturedPosts";

export default function Home() {
  return (
    <main className="container mx-auto px-10 mb-8 ">
      <FeaturedPosts />
      <PageElements />
    </main>
  );
}

// Fetch data at build time
// export const getStaticProps = async () => {
//   const posts = (await getPosts()) || [];
//   return { props: { posts } };
// };
