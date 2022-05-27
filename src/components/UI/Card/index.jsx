import React from 'react';
import style from './Card.module.css';

// Card라는 공통적인 속성을 기본으로 두고
// 각 component별로 추가 css를 적용한다.

const index = ({ className, children }) => {
  const classes = style.card +" "+ className; // *띄어쓰기로 구분*
  return <div className={classes}>{children}</div>;
};

export default index;
