import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { loadIdeas } from '../features/ideasSlice';

import IdeasContainer from '../containers/IdeasContainer';

const Wrapper = styled.div({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export default function IdeaPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIdeas());
  }, []);

  return (
    <Wrapper>
      <IdeasContainer />
    </Wrapper>
  );
}
