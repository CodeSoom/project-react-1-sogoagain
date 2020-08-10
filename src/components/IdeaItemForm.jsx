import React from 'react';

import TextField from './TextField';

export default function IdeaItemForm({
  fields: { who, what }, onSubmit, onChange,
}) {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="누구를 위한 것인가요?"
        name="who"
        type="text"
        value={who}
        onChange={onChange}
      />
      <TextField
        label="어떤 것인가요?"
        name="what"
        type="text"
        value={what}
        onChange={onChange}
      />
      <button type="submit">기여하기</button>
    </form>
  );
}
