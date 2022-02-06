const randomGradient = (currentRandomNum: number) => {
  const randomNum = Math.floor(Math.random() * 5); // 0 - 9

  const gradients = [
    `url('/assets/images/imageedit_6_5544743324.png'),
    linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`,
    `url('/assets/images/imageedit_6_5544743324.png'),
    linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)`,
    `url('/assets/images/imageedit_6_5544743324.png'),
    linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)`,
    `url('/assets/images/imageedit_6_5544743324.png'),
    linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)`,
    `url('/assets/images/imageedit_6_5544743324.png'),
    linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)`,
  ];

  if (randomNum === currentRandomNum && randomNum === 4) {
    return { gradient: gradients[randomNum - 1], newCurrentRandomNum: randomNum - 1 };
  } else if (randomNum === currentRandomNum && randomNum === 0) {
    return { gradient: gradients[randomNum + 1], newCurrentRandomNum: randomNum + 1 };
  } else if (randomNum === currentRandomNum) {
    return { gradient: gradients[randomNum + 1], newCurrentRandomNum: randomNum + 1 };
  } else {
    return { gradient: gradients[randomNum], newCurrentRandomNum: randomNum };
  }
};

export default randomGradient;
