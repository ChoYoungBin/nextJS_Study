import fs from "fs/promises";
import path from "path";

const ProductDetail = (props) => {
  const { loadedProduct } = props;

  return (
    <>
      {loadedProduct.map((product) => {
        return (
          <>
            <div>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  const productId = params.pid;

  const filepath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  const product = data.products.filter((product) => product.id == productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } },
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
      { params: { pid: "p4" } },
    ],
    fallback: false,
  };
}

export default ProductDetail;
