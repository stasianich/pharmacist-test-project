export const Swiper = (touchEvent) => {
  return new Promise((resolve) => {
    resolve(touchStart(touchEvent));
  }).then((data) => {
    return new Promise((resolve) => {
      addEventListener('touchend',
        (touchEvent) => {
          resolve(touchEnd(touchEvent, data[0], data[1]));
        }, {once: true}
      );
    });
  })
};

const touchStart = (touchEvent) => {
  if (touchEvent.changedTouches.length !== 1) {
    return;
  }
  const posXStart = touchEvent.changedTouches[0].clientX;
  const posYStart = touchEvent.changedTouches[0].clientY;

  return [posXStart, posYStart];
};

const touchEnd = (touchEvent, posXStart, posYStart) => {
  if (touchEvent.changedTouches.length !== 1) {
    return;
  }

  const posXEnd = touchEvent.changedTouches[0].clientX;
  const posYEnd = touchEvent.changedTouches[0].clientY;

  const xDifferent = posXEnd - posXStart;
  const yDifferent = posYEnd - posYStart;

  if (Math.abs(xDifferent) > Math.abs(yDifferent)) {
    if (xDifferent > 0) {
      return 'right'; // swipe right
    } else if (xDifferent < 0) {
      return 'left'; // swipe left
    }
  } else if (Math.abs(xDifferent) < Math.abs(yDifferent)) {
    if (yDifferent < 0) {
      return 'up'; // swipe up
    } else {
      return 'down'; // swipe down
    }
  }
};
