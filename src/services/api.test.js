import { fetchIdea, postItem } from './api';

import IDEA from '../__fixtures__/idea';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchIdea', () => {
    beforeEach(() => {
      mockFetch(IDEA);
    });

    it('fetch idea', async () => {
      const idea = await fetchIdea();

      expect(idea).toEqual(IDEA);
    });
  });

  describe('postItem', () => {
    beforeEach(() => {
      mockFetch({});
    });

    it('post item', async () => {
      await postItem({ who: '프로그래머' });

      expect(fetch).toBeCalled();
    });
  });
});
