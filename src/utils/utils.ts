// Get image
export const getImageLink = (url: string): string => {
  return new URL(url, import.meta.url).href;
};

export const getSortQuery = (value: string): string => {
  const sortName = value.split("-")[0];
  const sortKey = value.split("-")[1];
  return value === "default" ? "" : `&_sort=${sortName}&_order=${sortKey}`;
};

export const checkBookmark = (
  videoId: string,
  bookmarks: string[]
): boolean => {
  return bookmarks.some((el) => el === videoId);
};

export const updateBookmarks = (
  isBookmarked: boolean,
  bookmarks: string[],
  videoId: string
): string[] => {
  return isBookmarked
    ? bookmarks.filter((bookmark) => bookmark !== videoId)
    : [...bookmarks, videoId];
};

export const idsToString = (arr: string[]): string => {
  return arr.map((id) => `id=${id}`).join("&");
};

export const getStyleCondition = (val: boolean): string | undefined => {
  return val ? String(val) : undefined;
};

export const bookmarksNotification = (
  title: string,
  isBookmarked: boolean
): string => {
  return !isBookmarked
    ? `The film of "${title}" has been added to bookmarks`
    : `The film of "${title}" has just been removed from bookmarks`;
};

const numMoreThanTen = (num: number): string =>
  num >= 10 ? String(num) : `0${num}`;

export const createDate = (date: Date | string, time?: boolean): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Ocrober",
    "November",
    "December",
  ];
  const month = months[new Date(date).getMonth()];
  const day = new Date(date).getDate();
  const year = new Date(date).getFullYear();
  const hours = numMoreThanTen(new Date(date).getHours());
  const minutes = numMoreThanTen(new Date(date).getMinutes());
  return time
    ? `${month} ${day}, ${year}, ${hours}:${minutes}`
    : `${month} ${day}, ${year}`;
};
