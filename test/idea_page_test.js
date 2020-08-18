Feature('Idea');

Scenario('랜덤으로 출력되는 아이디어를 볼 수 있다.', (I) => {
  I.amOnPage('/');

  I.click('아이디어 있어?');

  I.see('를 위한');
});

Scenario('아이디어를 좋아요 할 수 있다.', (I) => {
  I.amOnPage('/');

  I.see('좋아요', 'button');
});
