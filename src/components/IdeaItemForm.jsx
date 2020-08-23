import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';
import Button from './Button';

const Wrapper = styled.form({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
});

export default function IdeaItemForm({
  fields: { who, what }, loading, onSubmit, onChange,
}) {
  return (
    <Wrapper onSubmit={onSubmit}>
      <TextField
        label="누구를 위한 것인가요?"
        name="who"
        type="text"
        max={10}
        value={who}
        onChange={onChange}
      />
      <TextField
        label="어떤 것인가요?"
        name="what"
        type="text"
        max={10}
        value={what}
        onChange={onChange}
      />
      <Button
        type="submit"
        disabled={loading}
      >
        기여하기
      </Button>
    </Wrapper>
  );
}
