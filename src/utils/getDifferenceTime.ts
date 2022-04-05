export function getDifferenceTime(created_date: Date) {
  const date = new Date(created_date);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  if (diff < 1000) {
    return "just now";
  } else if (diff < 60000) {
    return `${Math.floor(diff / 1000)} seconds ago`;
  } else if (diff < 3600000) {
    return `${Math.floor(diff / 60000)} ${
      Math.floor(diff / 60000) === 1 ? "minute" : "minutes"
    } ago`;
  } else if (diff < 86400000) {
    return `${Math.floor(diff / 3600000)} ${
      Math.floor(diff / 3600000) === 1 ? "hour" : "hours"
    } ago`;
  }
  return `${Math.floor(diff / 86400000)} ${
    Math.floor(diff / 86400000) === 1 ? "day" : "days"
  } ago`;
}
