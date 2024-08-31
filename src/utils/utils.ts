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
