import React from 'react';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <img src="https://s1.ax1x.com/2020/06/16/NFcpdJ.png" className={styles['feer-logo']} alt="logo" />
      <p className={styles['feer-edit']}>Edit <code>src/demo.js</code> and save to reload.</p>
    </div>
  );
}
