import testMachine, { mockMachine } from '@bemedev/x-test';
// import { describe, test } from 'vitest';
import machine from './machine';

describe('Acceptance test', () => {
  const _machine = mockMachine(machine);
  const { assignAction, promise } = testMachine(machine);

  describe('Promises', () => {
    describe('#1 -> get_API_URL', () => {
      const { createAcceptance, createExpect } = promise('get_API_URL');
      test('Acceptance', () => {
        createAcceptance()();
      });

      test('It returns the API_URL', async () => {
        const expect = createExpect({
          expected: process.env.MEDIA_STACK_URL,
          context: {},
        });
        await expect();
      });

      describe('Mock env : MEDIA_STACK_URL = undefined', () => {
        const env = { ...process.env };
        beforeAll(() => {
          jest.resetModules();
          process.env = { ...process.env, MEDIA_STACK_URL: undefined };
        });

        afterAll(() => {
          process.env = env;
        });

        test('It will throw if no API_URL', async () => {
          const _expect = createExpect({
            expected: env.MEDIA_STACK_URL,
            context: {},
          });
          expect(_expect()).rejects.toThrowError('No API_URL');
        });
      });
    });

    describe('#2 -> get_API_KEY', () => {
      const { createAcceptance, createExpect } = promise('get_API_KEY');
      test('Acceptance', () => {
        createAcceptance()();
      });

      test('It returns the API_URL', async () => {
        const expect = createExpect({
          expected: process.env.MEDIA_STACK_APIKEY,
          context: {},
        });
        await expect();
      });

      describe('Mock env : MEDIA_STACK_APIKEY = undefined', () => {
        const env = { ...process.env };
        beforeAll(() => {
          jest.resetModules();
          process.env = { ...process.env, MEDIA_STACK_APIKEY: undefined };
        });

        afterAll(() => {
          process.env = env;
        });

        test('It will throw if no API_KEY', async () => {
          const _expect = createExpect({
            expected: env.MEDIA_STACK_URL,
            context: {},
          });
          expect(_expect()).rejects.toThrowError('No API_KEY');
        });
      });
    });

    describe('#3 -> fetchNews', () => {
      const { createAcceptance, createExpect } = promise('fetchNews');

      test('#1 -> Acceptance', () => {
        createAcceptance()();
      });

      test('#2 -> It returns the Response', async () => {
        const mockObj = {
          ok: true,
          data: 'data',
        };
        jest
          .spyOn(global, 'fetch')
          .mockReturnValue(Promise.resolve(mockObj) as any);
        const expect = createExpect({
          expected: mockObj,
          context: {},
        });
        await expect();
      });

      test('#3 -> It will throw if Response is not ok', async () => {
        const mockObj = {
          ok: false,
          data: 'data',
        };
        jest
          .spyOn(global, 'fetch')
          .mockReturnValue(Promise.resolve(mockObj) as any);
        const _expect = createExpect({
          expected: mockObj,
          context: {},
        });
        expect(_expect()).rejects.toThrowError('not OK');
      });
    });

    describe('#4 -> json', () => {
      const { createAcceptance, createExpect } = promise('json');

      test('#1 -> Acceptance', () => {
        createAcceptance()();
      });

      test('#2 -> It will transform in JSON', async () => {
        const json = async () => 'data';
        const expect = createExpect({
          expected: 'data',
          context: { response: { json } as any },
        });
        expect();
      });

      test('#3 -> It will throw if some Error', async () => {
        const json = async () => {
          throw new Error('Something went wrong');
        };
        const _expect = createExpect({
          expected: 'data',
          context: { response: { json } as any },
        });
        expect(_expect()).rejects.toThrowError('Something went wrong');
      });
    });

    describe('#5 -> zod', () => {
      const { createAcceptance, createExpect } = promise('zod');

      test('#1 -> Acceptance', () => {
        createAcceptance()();
      });

      test('#2 -> It will validate the JSON', async () => {
        const json = {
          pagination: {
            limit: 10,
            offset: 0,
            count: 10,
            total: 10,
          },
          news: [],
        };
        const expect = createExpect({
          expected: json,
          context: { json },
        });

        expect();
      });

      test('#3 -> It will throw if JSON is not conform', async () => {
        const json = {
          pagination: {
            limit: 10,
            offset: 0,
            count: 10,
            total: '10',
          },
          news: [],
        };
        const _expect = createExpect({
          expected: json,
          context: { json },
        });

        expect(_expect()).rejects.toThrowError('Total is NaN');
      });
    });
  });

  describe('Actions', () => {
    describe('#1 -> assignAPI_URL', () => {
      const { createAcceptance, createExpect } =
        assignAction('assignAPI_URL');
      test('Acceptance', () => {
        createAcceptance()();
      });

      test('It assigns the API_URL', () => {
        const expect = createExpect({
          expected: { API_URL: process.env.MEDIA_STACK_URL },
          context: {},
          //@ts-ignore
          event: { type: '', data: process.env.MEDIA_STACK_URL },
        });
        expect();
      });
    });

    describe('#2 -> assignAPI_KEY', () => {
      const { createAcceptance, createExpect } =
        assignAction('assignAPI_KEY');

      test('Acceptance', () => {
        createAcceptance()();
      });

      test('It assigns the API_KEY', () => {
        const expect = createExpect({
          expected: { API_KEY: process.env.MEDIA_STACK_APIKEY },
          context: {},
          //@ts-ignore
          event: { type: '', data: process.env.MEDIA_STACK_APIKEY },
        });
        expect();
      });
    });

    describe('#3 -> concatCategories', () => {
      const { createAcceptance, createExpect } =
        assignAction('concatCategories');

      test('#1 -> Acceptance', () => {
        createAcceptance()();
      });

      test('#2 -> It concats the categories', () => {
        const expect = createExpect({
          context: {},
          event: { type: 'QUERY', categories: ['technology', 'sports'] },
          expected: { categories: 'technology,sports' },
        });
        expect();
      });

      test('#3 -> It concats the categories', () => {
        const expect = createExpect({
          context: {},
          event: { type: 'QUERY', categories: ['business', 'health'] },
          expected: { categories: 'business,health' },
        });
        expect();
      });
    });

    describe('#4 -> buildURL', () => {
      const { createAcceptance, createExpect } = assignAction('buildURL');

      test('Acceptance', () => {
        createAcceptance()();
      });

      test('It builds the URL', () => {
        // #region Prepare
        const API_URL = process.env.MEDIA_STACK_URL;
        const API_KEY = process.env.MEDIA_STACK_APIKEY;
        const categories = 'business,health';
        const URL = `${API_URL}?access_key=${API_KEY}&keywords=${categories}`;
        // #endregion

        const expect = createExpect({
          expected: {
            URL,
            categories,
            API_URL,
            API_KEY,
          },
          context: { categories, API_URL, API_KEY },
          //@ts-ignore
          event: { type: '' },
        });
        expect();
      });
    });

    describe('#5 -> assignResponse', () => {
      const { createAcceptance, createExpect } =
        assignAction('assignResponse');

      test('Acceptance', () => {
        createAcceptance()();
      });

      test('It assigns the response', () => {
        const response = 'data' as any;
        const expect = createExpect({
          expected: {
            response,
          },
          context: {},
          //@ts-ignore
          event: { type: '', data: response },
        });
        expect();
      });
    });

    describe('#5 -> assignJSON', () => {
      const { createAcceptance, createExpect } =
        assignAction('assignJSON');

      test('Acceptance', () => {
        createAcceptance()();
      });

      test('It assigns the json', () => {
        const json = 'data';
        const expect = createExpect({
          expected: {
            json,
          },
          context: {},
          //@ts-ignore
          event: { type: '', data: json },
        });
        expect();
      });
    });

    describe('#6 -> assignNews', () => {
      const { createAcceptance, createExpect } =
        assignAction('assignNews');

      test('Acceptance', () => {
        createAcceptance()();
      });

      test('It assigns the news', () => {
        const data = {
          pagination: {
            limit: 10,
            offset: 0,
            count: 10,
            total: 10,
          },
          news: [{ name: 'Obélix' }],
        } as any;
        const expect = createExpect({
          expected: {
            news: data.news,
          },
          context: {},
          //@ts-ignore
          event: { type: '', data },
        });
        expect();
      });
    });

    describe('#7 -> assignPagination', () => {
      const { createAcceptance, createExpect } =
        assignAction('assignPagination');

      test('Acceptance', () => {
        createAcceptance()();
      });

      test('It assigns the pagination', () => {
        const data = {
          pagination: {
            limit: 10,
            offset: 0,
            count: 10,
            total: 10,
          },
          news: [{ name: 'Obélix' }],
        } as any;
        const expect = createExpect({
          expected: {
            pagination: data.pagination,
          },
          context: {},
          //@ts-ignore
          event: { type: '', data },
        });
        expect();
      });
    });

    describe('#8 -> Errors', () => {
      const escalateTest = (action: string) => {
        test(action, () => {
          const escalate = machine.options.actions?.[action];
          expect(escalate).toBeDefined();
        });
      };

      [
        'escaladeFetchError',
        'escaladeJsonError',
        'escaladeZodError',
        'escalateNoAPI_KEY',
        'escalateNoAPI_URL',
      ].forEach(escalateTest);
    });
  });
});
