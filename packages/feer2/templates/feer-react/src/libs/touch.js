const noop = () => {};

function swipeDirection(x1, x2, y1, y2) {
  if (Math.abs(x1 - x2) >= Math.abs(y1 - y2)) {
    return x1 - x2 > 0 ? 'left' : 'right';
  }
  return y1 - y2 > 0 ? 'up' : 'down';
}

export default function Touch() {
  let x1 = 0;
  let x2 = 0;
  let y1 = 0;
  let y2 = 0;

  return ({ swipeLeft = noop, swipeRight = noop, swipeUp = noop, swipeDown = noop }) => {
    function down(e) {
      x1 = e.touches[0].pageX;
      y1 = e.touches[0].pageY;
    }

    function up(e) {
      x2 = e.changedTouches[0].pageX;
      y2 = e.changedTouches[0].pageY;
      const direction = swipeDirection(x1, x2, y1, y2);
      switch (direction) {
        case 'left':
          swipeLeft(e);
          break;
        case 'right':
          swipeRight(e);
          break;
        case 'up':
          swipeUp(e);
          break;
        case 'down':
          swipeDown(e);
          break;
        default:
          break;
      }
    }

    return {
      onTouchStart: down,
      onTouchEnd: up,
    };
  };
}
