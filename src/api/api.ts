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
  method: "POST" | "PATCH" | "PUT" | "DELETE",
  body?: T
) => {
  try {
    const response = await fetch(`${API_URL}${uri}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : null,
    });
    const data = await response.json();
    if (response.status === 400) {
      return { message: data };
    }
    return data;
  } catch (e) {
    throw e;
  }
};
