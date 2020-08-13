import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadIdea, likeIdea } from '../features/ideaSlice';

import IdeaDescription from '../components/IdeaDescription';

export default function IdeaContainer() {
  const dispatch = useDispatch();
  const idea = useSelector((state) => state.idea);

  const handleClickThink = () => {
    dispatch(loadIdea());
  };

  const handleClickLike = () => {
    dispatch(likeIdea());
  };

  useEffect(() => {
    dispatch(loadIdea());
  }, []);

  if (!idea.who || !idea.what) {
    return (
      <p>생각중...</p>
    );
  }

  return (
    <IdeaDescription
      idea={idea}
      onClickThink={handleClickThink}
      onClickLike={handleClickLike}
    />
  );
}
