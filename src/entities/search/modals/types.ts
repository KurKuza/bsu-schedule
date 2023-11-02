export interface SearchResponse {
  id: string;
  name: string;
  type: SearchResponseType;
}

export type SearchResponseType = 'g' | 't' | 'a';
