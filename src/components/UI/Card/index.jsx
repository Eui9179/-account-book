import React from 'react';
import { StyledCard } from './styles';

// Card라는 공통적인 속성을 기본으로 두고
// 각 component별로 추가 css를 적용한다.

const index = ({ className, children }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export default index;
