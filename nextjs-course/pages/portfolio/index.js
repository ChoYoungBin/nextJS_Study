import Head from "next/head";

const Portfolio = (props) => {
  return (
    <>
      <div>
        <Head>
          <title>{props.title}</title>
          <meta></meta>
        </Head>
        <h1>The Portfolio</h1>
      </div>
    </>
  );
};

export default Portfolio;
