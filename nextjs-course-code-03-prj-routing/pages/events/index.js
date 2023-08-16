import { useRouter } from "next/router";

import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage(props) {
  const router = useRouter();
  const events = props.items;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://nextjs-course-49200-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );
  const data = await res.json();
  const eventList = [];

  for (const key in data) {
    const event = {
      id: key,
      ...data[key],
    };

    eventList.push(event);
  }

  if (eventList == null) {
    return (
      <>
        <p>...isLoading</p>
      </>
    );
  }

  return {
    props: { items: eventList },
    revalidate: 60,
  };
}

export default AllEventsPage;
