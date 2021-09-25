// https://support.nii.ac.jp/ja/cia/api/a_opensearch_auth
import { fetcher, QueryParams } from "../utils/fetcher.ts";

// conut: 1ページあたりの件数
// start: 取得する検索結果一覧の開始番号

interface IndexQueryParams extends QueryParams {
  q: string
  format: "json"
  count: number
  start: number
  appid: string
}

export interface AuthorName {
  firstName: string
  lastName: string
}

const authorIndexPath = (serializedQuery: string): string =>
  `https://ci.nii.ac.jp/opensearch/author?${serializedQuery}`

const joinName = (authorName: AuthorName): string =>
  `${authorName.lastName}+${authorName.firstName}`

const fetchRepeatedly = async (requestPath: (serializedQuery: string) => string, params: IndexQueryParams) => {
  const resonse = await fetcher(requestPath, params);
  const graph = resonse["@graph"][0];

  console.log(graph.items.length);
  if (graph["opensearch:totalResults"] > params["start"] + params["count"]) {
    params["start"] += params["count"] + 1
    fetchRepeatedly(requestPath, params)
  }
};

export const getAuthors = (authorName: AuthorName): void => {
  let queryParams: IndexQueryParams = {
    q: joinName(authorName),
    count: 200,
    format: "json",
    start: 0,
    appid: Deno.env.get("APPID") || "hogehoge"
  }

  fetchRepeatedly(authorIndexPath, queryParams);
};
