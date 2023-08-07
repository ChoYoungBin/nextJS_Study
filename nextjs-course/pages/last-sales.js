import { useEffect, useState } from "react";
import useSWR from "swr";

const LastSalesPage = (props) => {
  const [sales, setSales] = useState(props.sales);
  //const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR("/sales.json");

  if (error) {
    return <p>Failed to Load...</p>;
  }
  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          usename: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transformedSales);
    }
  }, [data]);
  /**
    * useEffect

  useEffect(() => {
    setIsLoading(true);
    const data = fetch("/sales.json")
      .then((response) => {
        response.json();
      })
      .then((data) => {
        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({
            id: key,
            usename: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);

   */

  // if (isLoading) {
  //   return (
  //     <>
  //       <p>...isLoading</p>
  //     </>
  //   );
  // }

  // if (!sales) {
  //   return (
  //     <>
  //       <p>No data Yet...</p>
  //     </>
  //   );
  // }

  return (
    <>
      <ul>
        {sales?.map((sale) => {
          <li key={sale.id}>
            {sale.username} - {sale.volume}
          </li>;
        })}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const response = fetch("/sales.json")
    .then((response) => {
      response.json();
    })
    .then((data) => {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          usename: data[key].username,
          volume: data[key].volume,
        });
      }

      return { props: { sales: transformedSales }, revalidate: 10 };
    });
}
export default LastSalesPage;
