import dayjs from "dayjs";

export function formatTimestamp(timestamp: string) {
  const dateString = timestamp.split("T")[0];
  const formattedDate = dayjs(dateString);

  if (!formattedDate.isValid()) {
    throw new Error("invalid timestamp");
  }

  return formattedDate.format("DD MMMM, YYYY");
}
