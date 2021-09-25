export interface QueryParams {
  [key: string]: number | string;
}

const querySerialize = (queryParams: QueryParams): string =>
  Object.keys(queryParams)
    .map((key) => `${key}=${queryParams[key]}`)
    .reduce((base, key) => `${base}&${key}`);

export const fetcher = (requestPath: (serializedQuery: string) => string, queryParams: QueryParams) => {
  const url = requestPath(querySerialize(queryParams));
  return fetch(url).then((res) => res.json());
};
