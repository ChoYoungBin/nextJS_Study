import Link from "next/link";

const ClientPage = () => {
  const clients = [
    { id: "max", name: "Maxmillian" },
    { id: "youngbin", name: "Cho" },
    { id: "test", name: "MyName" },
  ];

  return (
    <>
      <div>
        <h1>Client Page</h1>
        <ul>
          {clients?.map((client) => {
            return (
              <li key={client.id}>
                {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
                <Link
                  href={{
                    pathname: "/clients/[id]",
                    query: { id: client.id, name: client.name },
                  }}
                >
                  {client.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ClientPage;
