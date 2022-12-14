import { CATEGORIES } from 'lib/entities/strings';
import { createMachine } from 'xstate';
import { Context, Events } from './machine.types';

export const machine = createMachine(
  {
    schema: {
      context: {} as Context,
      events: {} as Events,
    },
    tsTypes: {} as import('./machine.typegen').Typegen0,
    predictableActionArguments: true,
    preserveActionOrder: true,
    id: 'main',
    initial: 'idle',
    context: { currentPage: '/', categories: CATEGORIES },
    states: {
      idle: {
        invoke: {
          src: 'fetchNews',
          onDone: [
            {
              target: 'work',
              actions: "'setNews'",
            },
          ],
          onError: [
            {
              target: 'work',
            },
          ],
        },
      },
      work: {
        states: {
          search: {
            initial: 'inactive',
            states: {
              inactive: {},
              active: {
                initial: 'idle',
                states: {
                  idle: {
                    on: {
                      SEARCH: {
                        target: 'loading',
                      },
                    },
                  },
                  loading: {
                    invoke: {
                      src: 'fetchNews',
                      onDone: [
                        {
                          target: 'idle',
                          actions: "'setNews'",
                        },
                      ],
                      onError: [
                        {
                          target: 'idle',
                        },
                      ],
                    },
                  },
                },
              },
              checking: {
                always: [
                  {
                    target: 'inactive',
                    cond: 'isInputIsEmpty',
                  },
                  {
                    target: 'active',
                  },
                ],
              },
            },
            on: {
              INPUT: {
                target: '.checking',
                actions: 'setInput',
              },
            },
          },
        },

        type: 'parallel',
      },
    },
  },
  {
    actions: {},
    services: {
      fetchNews: async context => {
        const API_URL = process.env.MEDIA_STACK_URL;
        const API_KEY = process.env.MEDIA_STACK_APIKEY;
        const KEYWORDS = context.categories.join(',');
        const URL = `${API_URL}?access_key=${API_KEY}&keywords=${KEYWORDS}`;
        const response = await fetch(URL);
        const data = await response.json();
        return data;
      },
    },
  },
);
