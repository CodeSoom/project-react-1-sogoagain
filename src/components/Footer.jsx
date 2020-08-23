import React from 'react';

import styled from '@emotion/styled';

import { FOOTER_HEIGHT, secondary } from '../styles/constants';

const Wrapper = styled.footer({
  textAlign: 'center',
  fontSize: '1rem',
  color: secondary,
  height: FOOTER_HEIGHT,
});

export default function Footer() {
  return (
    <Wrapper>
      Developed by
      {' '}
      <a href="https://github.com/sogoagain">sogoagain</a>
      .
    </Wrapper>
  );
}
