import React from 'react';

import styled from '@emotion/styled';

import ContributingContainer from '../containers/ContributingContainer';

const Wrapper = styled.div({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
});

export default function ContributingPage() {
  return (
    <Wrapper>
      <ContributingContainer />
    </Wrapper>
  );
}
