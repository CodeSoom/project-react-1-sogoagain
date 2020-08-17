Feature('Header');

Scenario('헤더를 확인할 수 있다.', (I) => {
  I.amOnPage('/');

  I.see('창업하자! 아이디어는 내게 맡겨!');
});
