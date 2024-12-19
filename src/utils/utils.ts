import dayjs from "dayjs";

export function formatTimestamp(timestamp: string) {
  const dateString = timestamp.split("T")[0];

  return dayjs(dateString).format("DD MMMM, YYYY");
}
