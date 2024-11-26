/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IApiRequest {
  url: string;
  method: "POST" | "DELETE" | "PATCH";
  token?: string;
  body?: object;
}

/**
 * Make http fetch request to the server
 * @param url - url endpoint
 * @param method (optional) - http protocol method to be made
 * @param token - (optional) authorization token
 * @param body - (optional) payload data
 * @returns Promise
 */
export async function makeApiRequest({
  url,
  method,
  token,
  body,
}: IApiRequest): Promise<any> {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: "Bearer " + token })
    },
    ...(body && { body: JSON.stringify(body)})
  };

  const response = await fetch(url, options);
  return response.json();
}

