import { useRouter } from "next/router";
import Head from "next/head";

const BlogPostsPage = (props) => {
  const router = useRouter();

  console.log(router.query);

  return (
    <>
      <Head>
        <title>Filtered Blogs</title>
        <meta name="description" content={`${props.title} `}></meta>
      </Head>
      <div>
        <h1>The Blog Posts</h1>
      </div>
    </>
  );
};

export default BlogPostsPage;
