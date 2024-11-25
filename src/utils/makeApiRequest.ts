export interface IApiRequest {
  url: string;
  method: "POST" | "DELETE" | "PATCH";
  token: string;
  body?: object;
}
export async function makeApiRequest({
  url,
  method,
  token,
  body,
}: IApiRequest) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

