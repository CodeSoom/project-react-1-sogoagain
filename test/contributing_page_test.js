Feature('Contributing');

Scenario('아이디어를 제안할 수 있다.', (I) => {
  I.amOnPage('/contributing');

  I.fillField('누구을(를) 위한 것인가요?', '프로그래머');
  I.fillField('어떤 것인가요?', '맛있는 라면');

  I.see('기여하기', 'button');
});
