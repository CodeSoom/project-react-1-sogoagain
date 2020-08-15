import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadIdea, likeIdea } from '../features/ideaSlice';

import IdeaDescription from '../components/IdeaDescription';
import Alert from '../components/Alert';

export default function IdeaContainer() {
  const dispatch = useDispatch();
  const {
    loading, liked, alert: { type, message }, resource,
  } = useSelector((state) => state.idea);

  const handleClickThink = () => {
    dispatch(loadIdea());
  };

  const handleClickLike = () => {
    dispatch(likeIdea());
  };

  if (loading) {
    return (
      <p>생각중...</p>
    );
  }

  return (
    <>
      <IdeaDescription
        idea={resource}
        liked={liked || type}
        onClickThink={handleClickThink}
        onClickLike={handleClickLike}
      />
      {type && (<Alert message={message} />)}
    </>
  );
}
