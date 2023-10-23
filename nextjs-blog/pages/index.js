import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";

const HomePage = (props) => {
  const { posts } = props;
  return (
    <>
      <Hero>
        <FeaturedPosts posts={posts} />
      </Hero>
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
