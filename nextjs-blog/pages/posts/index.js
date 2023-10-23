import { getAllPosts } from "@/lib/posts-util";
import AllPosts from "../../components/posts/all-post";

const AllPostPage = (props) => {
  const { posts } = props;
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 100,
  };
}
export default AllPostPage;
