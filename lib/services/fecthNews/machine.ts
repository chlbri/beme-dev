import { createMachine } from 'xstate';
import { Context, Events } from './machine.types';

export const machine = createMachine(
  {
    tsTypes: {} as import('./machine.typegen').Typegen0,
    id: 'fetchNews',
    initial: 'idle',
    states: {
      idle: {
        on: {
          QUERY: {
            target: 'buildingURL',
          },
        },
      },
      buildingURL: {
        always: {
          target: 'fetch',
        },
      },
      fetch: {
        invoke: {
          src: 'fetch',
          id: 'fetch',
          onDone: [
            {
              target: 'json',
            },
          ],
          onError: [
            {
              target: 'error',
              actions: 'escaladeFecthError',
            },
          ],
        },
      },
      json: {
        invoke: {
          src: 'json',
          id: 'json',
          onDone: [
            {
              target: 'zod',
            },
          ],
          onError: [
            {
              target: 'error',
              actions: 'escaladeJsonError',
            },
          ],
        },
      },
      zod: {
        invoke: {
          src: 'zod',
          id: 'zod',
          onDone: [
            {
              target: 'success',
            },
          ],
          onError: [
            {
              target: 'error',
              actions: 'escaladeZodError',
            },
          ],
        },
      },
      success: {
        type: 'final',
      },
      error: {
        type: 'final',
      },
    },
    schema: {
      context: {} as Context,
      events: {} as Events,
    },
    predictableActionArguments: true,
    preserveActionOrder: true,
  },
  {
    actions: {},
  },
);
