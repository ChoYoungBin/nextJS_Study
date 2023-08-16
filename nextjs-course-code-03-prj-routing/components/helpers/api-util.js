export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-49200-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );
  const data = await response.json();

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();

  return allEvents.filter((data) => data.isFeatured);
}

export async function getFilteredEvents() {
  const allEvents = await getAllEvents();

  return allEvents.filter((data) => data.isFeatured);
}

export async function getEventById(eventId) {
  const response = await fetch(
    `https://nextjs-course-49200-default-rtdb.europe-west1.firebasedatabase.app/events.json?id=${eventId}`
  );
  const data = await response.json();

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}
