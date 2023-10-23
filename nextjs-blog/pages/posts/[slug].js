import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData } from "@/lib/posts-util";

const PostDetailPage = (props) => {
  return (
    <>
      <PostContent post={props.postData} />
    </>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: { postData },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: "blocking",
  };
}
export default PostDetailPage;
