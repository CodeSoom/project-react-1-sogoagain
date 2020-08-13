import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadIdea } from '../features/ideaSlice';

import IdeaContainer from '../containers/IdeaContainer';

export default function IdeaPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIdea());
  }, []);

  return (
    <IdeaContainer />
  );
}
