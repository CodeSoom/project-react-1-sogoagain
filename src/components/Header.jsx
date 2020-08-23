import React from 'react';

import styled from '@emotion/styled';

import { HEADER_HEIGHT } from '../styles/constants';

const Title = styled.header({
  width: '100%',
  height: HEADER_HEIGHT,
  textAlign: 'center',
});

const Primary = styled.div({
  fontSize: '3rem',
  transform: 'matrix(0.98, -0.17, 0.2, 0.98, 0, 0)',
  paddingTop: '1rem',
});

const Secondary = styled.div({
  fontSize: '2rem',
  transform: 'matrix(1, -0.09, 0.1, 1, 0, 0)',
});

export default function Header({ primary, secondary }) {
  return (
    <Title>
      <Primary>
        {primary}
      </Primary>
      <Secondary>
        {secondary}
      </Secondary>
    </Title>
  );
}
