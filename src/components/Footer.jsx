import React from 'react';

import styled from '@emotion/styled';

import { FOOTER_HEIGHT, secondary } from '../styles/constants';

const Wrapper = styled.footer({
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
  height: FOOTER_HEIGHT,
  color: secondary,
  textAlign: 'center',
  fontSize: '1rem',
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
