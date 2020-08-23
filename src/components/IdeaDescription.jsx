import React from 'react';

import styled from '@emotion/styled';

import { LikeOnImage, LikeOffImage } from '../assets';

import { white, primary, secondary } from '../styles/constants';

const Idea = styled.div({
  textAlign: 'center',
  '& p': {
    fontSize: '1.625rem',
  },
});

const IdeaPart = styled.p({
  width: '320px',
  height: '4rem',
  fontFamily: "'Nanum Gothic Coding', monospace",
  fontWeight: 'bold',
  fontSize: '2rem',
  letterSpacing: '0.3rem',
  lineHeight: '4rem',
  textAlign: 'center',
  borderBottom: '1px solid #000',
  margin: '0 auto',
  verticalAlign: 'middle',
});

const Button = styled.button({
  backgroundColor: primary,
  color: white,
  border: 'none',
  borderRadius: '5.6px',
  width: '300px',
  height: '50px',
  fontSize: '2.25rem',
  cursor: 'pointer',
  transition: '0.3s',
  ':hover': {
    backgroundColor: secondary,
  },
});

const LikeButton = styled.button({
  backgroundColor: white,
  width: '53px',
  height: '50px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0',
  transform: 'scale(0.85)',
  ':disabled': {
    backgroundImage: `url(${LikeOnImage})`,
    animationName: 'like-scale',
    animationDelay: '0.1s',
    animationDuration: '0.85s',
    animationFillMode: 'forwards',
    animationIterationCount: '1',
    animationTimingFunction: 'cubic-bezier(0.5, 0, 0, 0.8)',
  },
  ':enabled': {
    backgroundImage: `url(${LikeOffImage})`,
    animationName: 'like-init',
    animationDelay: '0.1s',
    animationDuration: '0.85s',
    animationFillMode: 'forwards',
    animationIterationCount: '1',
    animationTimingFunction: 'cubic-bezier(0.5, 0, 0, 0.8)',
  },
});

export default function IdeaDescription({
  idea: { who, what }, liked, loading, onClickThink, onClickLike,
}) {
  return (
    <>
      <Idea>
        <IdeaPart>
          {who}
        </IdeaPart>
        <p>
          을(를) 위한
        </p>
        <IdeaPart>
          {what}
        </IdeaPart>
      </Idea>
      <LikeButton
        type="button"
        onClick={onClickLike}
        disabled={liked}
      >
        좋아요
      </LikeButton>
      <Button
        type="button"
        onClick={onClickThink}
        disabled={loading}
      >
        아이디어 있어?
      </Button>
    </>
  );
}
