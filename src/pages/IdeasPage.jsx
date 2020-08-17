import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadIdeas } from '../features/ideasSlice';

import IdeasContainer from '../containers/IdeasContainer';

export default function IdeaPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIdeas());
  }, []);

  return (
    <IdeasContainer />
  );
}
