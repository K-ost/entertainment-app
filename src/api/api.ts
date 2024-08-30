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

export const mutateData = async <T>(
  uri: string,
  method: "POST" | "PATCH" | "PUT",
  body: T
) => {
  try {
    const response = await fetch(`${API_URL}${uri}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    throw e;
  }
};
