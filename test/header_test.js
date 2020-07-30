Feature('Header');

Scenario('헤더가 출력됩니다.', (I) => {
  I.amOnPage('/');

  I.see('창업하자, 아이디어는 내게 맡겨.');
});
