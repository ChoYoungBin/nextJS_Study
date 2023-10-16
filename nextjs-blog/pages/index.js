import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-startted1",
    title: "Next",
    image: "extrovert-event.jpg",
    excerpt: "SONNY",
    date: "2023-01-01",
  },
  {
    slug: "getting-startted2",
    title: "Next",
    image: "coding-event.jpg",
    excerpt: "SONNY",
    date: "2023-01-01",
  },
  {
    slug: "getting-startted3",
    title: "Next",
    image: "extrovert-event.jpg",
    excerpt: "SONNY",
    date: "2023-01-01",
  },
  {
    slug: "getting-startted4",
    title: "Next",
    image: "extrovert-event.jpg",
    excerpt: "SONNY",
    date: "2023-01-01",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero>
        <FeaturedPosts posts={DUMMY_POSTS} />
      </Hero>
    </>
  );
};

export default HomePage;
