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
  json?: unknown;
  news?: NewsResponse['news'];
  pagination?: NewsResponse['pagination'];
  categories?: string;
} & Omit<Query, 'categories'>;

export type Events = {
  type: 'QUERY';
} & Query;
