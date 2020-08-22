import React from 'react';

import styled from '@emotion/styled';

const Title = styled.div({
  width: '360px',
  height: '120px',
  margin: '0 auto',
});

const Primary = styled.h1({
  fontSize: '3rem',
  transform: 'matrix(0.98, -0.17, 0.2, 0.98, 0, 0)',
  margin: '0',
});

const Secondary = styled.h2({
  fontSize: '2rem',
  transform: 'matrix(1, -0.09, 0.1, 1, 0, 0)',
  margin: '8px 0 0 47px',
});

export default function Header({ primary, secondary }) {
  return (
    <header>
      <Title>
        <Primary>
          {primary}
        </Primary>
        <Secondary>
          {secondary}
        </Secondary>
      </Title>
    </header>
  );
}
