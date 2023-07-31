import Link from "next/link";
import fs from "fs/promises";
import path from "path";

const HomePage = (props) => {
  const { products } = props;

  return (
    <>
      <div>
        <h1>The HomePage</h1>
        {/* <ul>
          <li>
            <Link href="/portfolio">portfolio</Link>
          </li>
          <li>
            <Link href="/clients">clients</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
        </ul> */}
        <ul>
          {products?.map((product) => (
            <li key={product.id}>
              {" "}
              <Link href={`/${product.id}`}>{product.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  console.log("(Re)Generating...");
  const filepath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length == 0) {
    return { notFound: true };
  }

  return {
    props: {
      // products: [{ id: "p1", title: "Product 1" }],
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
