import axios from "./axios";
import { PAGE_SIZE } from "../utils/constants";
import { getToday } from "../utils/helpers";
import toast from "react-hot-toast";

export async function getBookings({ filter, sortBy, page }) {
  // let query = supabase
  //   .from("bookings")
  //   .select(
  //     "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), quest(fullName, email)",
  //     { count: "exact" }
  //   );

  // if (filter) query = query[filter.method || "eq"](filter.status, filter.value);

  // if (sortBy)
  //   query.order(sortBy.field, { ascending: sortBy.direction === "asc" });

  // if (page) {
  //   const from = (page - 1) * PAGE_SIZE;
  //   const to = from + PAGE_SIZE - 1;
  //   query = query.range(from, to);
  // }

  // const { data, error, count } = await query;

  // if (error) {
  //   throw new Error("Bookings could not be loaded");
  // }

  // return { data, count };
  const res = await axios.get("/bookings");
  const { data } = res.data.data;

  return { data, count: data.length };
}

export async function getBooking(id) {
  const res = await axios.get(`/bookings/${id}`);
  const { data } = res.data.data;
  return data;
}

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
export async function getBookingsAfterDate(date) {
  const res = await axios.get(`/bookings/BookingsAfterDate/${date}`);

  const { plan: data } = res.data.data;
  return data;
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  const res = await axios.get(`/bookings/StaysAfterDate/${date}`);

  const { plan: data } = res.data.data;

  return data;
}

// Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  // const { data, error } = await supabase
  //   .from("bookings")
  //   .select("*, guests(fullName, nationality, countryFlag)")
  //   .or(
  //     `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
  //   )
  //   .order("created_at");

  // // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))

  // if (error) {
  //   console.error(error);
  //   throw new Error("Bookings could not get loaded");
  // }
  // return data;

  return {};
}

export async function updateBooking(id, obj) {
  const res = await axios.patch(`/bookings/${id}`, obj);
  const { data } = res.data.data;

  return data;
}

export async function deleteBooking(id) {
  const res = await axios.delete(`/bookings/${id}`);

  return null;
}
