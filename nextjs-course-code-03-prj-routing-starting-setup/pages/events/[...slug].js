import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const NumYear = +filteredYear;
  const NumMonth = +filteredMonth;

  const filteredEvent = getFilteredEvents({ year: NumYear, month: NumMonth });

  if (!filteredEvent || filteredEvent.length == 0) {
    return (
      <>
        <h1>No Events found for the chosen filter!</h1>
      </>
    );
  }

  return (
    <>
      <h1>FilteredEventsPage</h1>
      <EventList items={filteredEvent} />
    </>
  );
};

export default FilteredEventsPage;
