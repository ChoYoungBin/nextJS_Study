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

  const data = await getData();
  const product = data.products.filter((product) => product.id == productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

const getData = async () => {
  const filepath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);

  return data;
};

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathWithParams,
    fallback: false,
    //fallback: true or false,
  };
}

export default ProductDetail;
