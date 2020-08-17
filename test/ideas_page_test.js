Feature('Idea');

Scenario('최근 좋아요를 받은 아이디어 목록을 볼 수 있다.', (I) => {
  I.amOnPage('/ideas');

  I.seeNumberOfVisibleElements('li', 5);
});
