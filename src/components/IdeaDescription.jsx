import React from 'react';

export default function IdeaDescription({
  idea: { who, what }, liked, loading, onClickThink, onClickLike,
}) {
  return (
    <div>
      <p>
        {`${who}를 위한 ${what}`}
      </p>
      <button
        type="button"
        onClick={onClickThink}
        disabled={loading}
      >
        아이디어 있어?
      </button>
      <button
        type="button"
        onClick={onClickLike}
        disabled={liked}
      >
        좋아요
      </button>
    </div>
  );
}
