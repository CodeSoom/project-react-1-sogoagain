import React from 'react';

export default function IdeaDescription({ idea: { who, what } }) {
  return (
    <p>
      {`'${who}'를 위한 '${what}' 어때?`}
    </p>
  );
}
