import React from 'react';

export default function IdeaDescription({ idea: { who, what }, onClickThink, onClickLike }) {
  return (
    <div>
      <p>
        {`'${who}'를 위한 '${what}' 어때?`}
      </p>
      <button
        type="button"
        onClick={onClickThink}
      >
        생각하기
      </button>
      <button
        type="button"
        onClick={onClickLike}
      >
        좋아요
      </button>
    </div>
  );
}
