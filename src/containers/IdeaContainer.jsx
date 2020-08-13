import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadIdea, likeIdea } from '../features/ideaSlice';

import IdeaDescription from '../components/IdeaDescription';

export default function IdeaContainer() {
  const dispatch = useDispatch();
  const { resource } = useSelector((state) => state.idea);

  const handleClickThink = () => {
    dispatch(loadIdea());
  };

  const handleClickLike = () => {
    dispatch(likeIdea());
  };

  if (!resource.who || !resource.what) {
    return (
      <p>생각중...</p>
    );
  }

  return (
    <IdeaDescription
      idea={resource}
      onClickThink={handleClickThink}
      onClickLike={handleClickLike}
    />
  );
}
