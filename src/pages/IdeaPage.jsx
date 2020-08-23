import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { loadIdea } from '../features/ideaSlice';

import IdeaContainer from '../containers/IdeaContainer';

const Wrapper = styled.div({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
});

export default function IdeaPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIdea());
  }, []);

  return (
    <Wrapper>
      <IdeaContainer />
    </Wrapper>
  );
}
