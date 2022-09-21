import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';
import Touch from '../../src/libs/touch';

const touch = Touch();

export default function Switch() {
  const [currIndex, setCurrIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [animateIndex, setAnimateIndex] = useState(-1);
  const direction = useRef(1);
  const lock = useRef(false);

  function index(i = 0) {
    const len = 2;

    if (i < 0) {
      return len;
    }

    if (i > len) {
      return 0;
    }

    return i;
  }

  function swipeLeft() {
    if (lock.current) return;
    lock.current = true;
    console.log('left');
    setAnimateIndex(currIndex);
    setNextIndex(index(currIndex + 1));
    direction.current = 1;
  }
  function swipeRight() {
    if (lock.current) return;
    lock.current = true;
    console.log('right');
    setAnimateIndex(currIndex);
    setNextIndex(index(currIndex - 1));
    direction.current = -1;
  }

  function transitionEnd() {
    if (currIndex === animateIndex) {
      setCurrIndex(index(currIndex + direction.current));
      lock.current = false;
    }
  }

  function swipeUp() {
    console.log('swipeUp');
  }
  function swipeDown() {
    console.log('swipeDown');
  }

  return (
    <div
      className={styles.container}
      {...touch({
        swipeLeft,
        swipeRight,
        swipeUp,
        swipeDown,
      })}
    >
      <div
        className={classnames(
          { [styles.animate]: animateIndex === 0 },
          { [styles.curr]: currIndex === 0 },
          { [styles.next]: nextIndex === 0 },
          styles.item,
          styles.a,
        )}
        onTransitionEnd={transitionEnd}
      >
        1
      </div>
      <div
        className={classnames(
          { [styles.animate]: animateIndex === 1 },
          { [styles.curr]: currIndex === 1 },
          { [styles.next]: nextIndex === 1 },
          styles.item,
          styles.b,
        )}
        onTransitionEnd={transitionEnd}
      >
        2
      </div>
      <div
        className={classnames(
          { [styles.animate]: animateIndex === 2 },
          { [styles.curr]: currIndex === 2 },
          { [styles.next]: nextIndex === 2 },
          styles.item,
          styles.c,
        )}
        onTransitionEnd={transitionEnd}
      >
        3
      </div>
    </div>
  );
}
