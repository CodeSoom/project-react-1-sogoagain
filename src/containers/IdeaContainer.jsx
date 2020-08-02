import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadIdea } from '../features/ideaSlice';

import IdeaDescription from '../components/IdeaDescription';

export default function IdeaContainer() {
  const dispatch = useDispatch();
  const idea = useSelector((state) => state.idea);

  useEffect(() => {
    dispatch(loadIdea());
  }, []);

  return (
    <IdeaDescription idea={idea} />
  );
}
