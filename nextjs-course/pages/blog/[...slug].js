import { useRouter } from "next/router";
import Head from "next/head";

const BlogPostsPage = (props) => {
  const pageHeadData = (
    <Head>
      <title>Filtered Blogs</title>
      <meta name="description" content={`${props.title} `}></meta>
    </Head>
  );

  const router = useRouter();

  console.log(router.query);

  return (
    <>
      {pageHeadData}
      <div>
        <h1>The Blog Posts</h1>
      </div>
    </>
  );
};

export default BlogPostsPage;
