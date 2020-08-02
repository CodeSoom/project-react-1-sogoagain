Feature('Idea');

Scenario('랜덤으로 출력되는 아이디어를 볼 수 있다.', (I) => {
  I.amOnPage('/');

  I.see('를 위한');
  I.see('어때?');
});

Scenario('아이디어를 새로고침 할 수 있다.', (I) => {
  I.amOnPage('/');

  I.click('생각하기');

  I.see('를 위한');
  I.see('어때?');
});
