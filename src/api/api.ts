import { API_URL } from "../constants";

export const getData = async <T>(uri: string): Promise<T> => {
  try {
    const response = await fetch(`${API_URL}${uri}`);
    const data = await response.json();
    return data;
  } catch (e) {
    throw e;
  }
};
