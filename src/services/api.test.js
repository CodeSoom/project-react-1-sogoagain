import { fetchIdea } from './api';

import IDEA from '../__fixtures__/idea';

global.Math.random = () => 0;

describe('api', () => {
  describe('fetchIdea', () => {
    it('fetch idea', async () => {
      const idea = await fetchIdea();

      expect(idea).toEqual(IDEA);
    });
  });
});
