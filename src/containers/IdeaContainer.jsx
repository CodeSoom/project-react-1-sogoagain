import React, { useState, useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Scrambler from 'scrambling-text';

import { loadIdea, likeIdea } from '../features/ideaSlice';

import IdeaDescription from '../components/IdeaDescription';
import Alert from '../components/Alert';

export default function IdeaContainer() {
  const dispatch = useDispatch();
  const {
    loading, liked, alert: { type, message }, resource,
  } = useSelector((state) => state.idea);

  const [who, setWho] = useState('');
  const [what, setWhat] = useState('');
  const textScramblersRef = useRef([new Scrambler(), new Scrambler()]);

  const handleClickThink = () => {
    dispatch(loadIdea());
  };

  const handleClickLike = () => {
    dispatch(likeIdea());
  };

  useEffect(() => {
    textScramblersRef.current[0].scramble(resource.who, setWho);
    textScramblersRef.current[1].scramble(resource.what, setWhat);
  }, [resource]);

  if (loading) {
    return (
      <p>생각중...</p>
    );
  }

  return (
    <>
      <IdeaDescription
        idea={{ who, what }}
        liked={liked || type}
        onClickThink={handleClickThink}
        onClickLike={handleClickLike}
      />
      {type && (<Alert message={message} />)}
    </>
  );
}
