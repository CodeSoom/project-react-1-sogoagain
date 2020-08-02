import React from 'react';

export default function IdeaDescription({ idea: { who, what }, onClick }) {
  return (
    <div>
      <p>
        {`'${who}'를 위한 '${what}' 어때?`}
      </p>
      <button
        type="button"
        onClick={onClick}
      >
        생각하기
      </button>
    </div>
  );
}
