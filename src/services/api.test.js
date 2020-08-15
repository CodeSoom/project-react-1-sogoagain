import { fetchIdea, postItem, postIdea } from './api';

import IDEA from '../__fixtures__/idea';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
      ok: given.ok,
    });
  };

  describe('fetchIdea', () => {
    context('when idea is fetched', () => {
      beforeEach(() => {
        given('ok', () => true);
        mockFetch(IDEA);
      });

      it('fetch idea', async () => {
        const idea = await fetchIdea();

        expect(idea).toEqual(IDEA);
      });
    });

    context('when idea cannot be fetched', () => {
      beforeEach(() => {
        given('ok', () => false);
        mockFetch({});
      });

      it('throws error', async () => {
        try {
          await fetchIdea();
        } catch (err) {
          expect(err.message).toEqual('ApiError');
        }
      });
    });
  });

  describe('postItem', () => {
    beforeEach(() => {
      given('ok', () => true);
      mockFetch({});
    });

    it('post item', async () => {
      await postItem({ who: '프로그래머' });

      expect(fetch).toBeCalled();
    });
  });

  describe('postIdea', () => {
    beforeEach(() => {
      given('ok', () => true);
      mockFetch({});
    });

    it('post idea', async () => {
      await postIdea(IDEA);

      expect(fetch).toBeCalled();
    });
  });
});
