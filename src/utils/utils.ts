// Get image
export const getImageLink = (url: string): string => {
  return new URL(url, import.meta.url).href
}

// getSortQuery
export const getSortQuery = (value: string): string => {
  return value === 'default' ? '' : `&sort=${value.split(',')[0]}&order=${value.split(',')[1]}`
}
