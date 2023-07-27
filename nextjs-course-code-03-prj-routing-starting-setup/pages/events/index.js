import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
const AllEventPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const onSearchHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <div>
        <EventSearch onSearch={onSearchHandler} />
        <EventList items={events} />
      </div>
    </>
  );
};
export default AllEventPage;
