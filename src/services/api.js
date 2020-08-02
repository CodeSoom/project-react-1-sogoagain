const whos = ['프로그래머', '디자이너', '기획자'];
const whats = ['맛있는 라면', '빠른 자동차', '재미있는 게임'];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function fetchIdea() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        who: getRandomElement(whos),
        what: getRandomElement(whats),
      });
    }, 200);
  });
}

// Todo: Delete this!
export function xxx() {}
