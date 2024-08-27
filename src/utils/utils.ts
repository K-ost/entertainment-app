// Get image
export const getImageLink = (url: string): string => {
  return new URL(url, import.meta.url).href;
};

// getSortQuery
export const getSortQuery = (value: string): string => {
  const sortName = value.split("-")[0];
  const sortKey = value.split("-")[1];
  return value === "default" ? "" : `&_sort=${sortName}&_order=${sortKey}`;
};
