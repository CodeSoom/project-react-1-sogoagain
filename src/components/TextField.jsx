import React from 'react';

import styled from '@emotion/styled';

import { secondary } from '../styles/constants';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const Label = styled.label({
  fontSize: '1.5rem',
  color: secondary,
});

const Input = styled.input({
  width: '320px',
  height: '2rem',
  fontFamily: "'Nanum Gothic Coding', monospace",
  fontWeight: 'bold',
  fontSize: '1.2rem',
  letterSpacing: '0.3rem',
  textAlign: 'center',
  border: 'none',
  borderBottom: '1px solid #000',
  margin: '0 auto',
  verticalAlign: 'middle',
  outline: 'none',
});

export default function TextField({
  label, name, type, max, value, onChange,
}) {
  const id = `input-control-${name}`;

  const handleChange = (e) => {
    onChange({ name, value: e.target.value });
  };

  return (
    <Wrapper>
      <Label htmlFor={id}>
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        maxLength={max}
        value={value}
        onChange={handleChange}
      />
    </Wrapper>
  );
}
