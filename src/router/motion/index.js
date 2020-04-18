import React from 'react'
import TweenOne from 'rc-tween-one';
import styles from './index.less'

function Demo(props) {
  const animation = [
    {
      x: 80,
      scale: 0.5,
      rotate: 0,
      yoyo: true, // demo 演示需要
      repeat: -1, // demo 演示需要
      duration: 1000
    }
  ]
  return (
    <TweenOne
      animation={animation}
      paused={props.paused}
      style={{ transform: 'translateX(-80px)' }}
      className={styles['code-box-shape']}
    />
  );
}

export default () => <>
  <Demo></Demo>
  <TweenOne
    animation={{
      value: 10000,
      duration: 1000
    }}
    className={styles['code-box-shape']}
  ></TweenOne>
</>