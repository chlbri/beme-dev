import type { NewsResponse } from '~entities/objects';
import type { Category } from '~entities/strings';

type Query = {
  categories?: Category[];
  offset?: number;
  limit?: number;
};

export type Context = {
  API_URL?: string;
  API_KEY?: string;
  URL?: string;
  response?: Response;
  data?: any;
  news?: NewsResponse;
} & Query;

export type Events = {
  type: 'QUERY';
} & Query;
