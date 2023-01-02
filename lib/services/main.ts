import interpret from '@bemedev/x-interpret-react';
import { SearchMachine } from 'services';

export const {
  sender,
  useMatches,
  useHasTags,
  useSelector,
  send,
  createContextSelector,
  createSelector,
  start,
} = interpret(SearchMachine);

start();

export const query = sender('QUERY');
export const sendInput = sender('INPUT');
export const defaultQuery = () => query({});
export const selectorNews = createSelector(state => state.context.news);
