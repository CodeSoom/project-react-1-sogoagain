import React from 'react';

import styled from '@emotion/styled';

const Wrapper = styled.div(({ show }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'fixed',
  zIndex: '1',
  top: '0',
  width: '100%',
  height: show ? '3rem' : '0',
  color: '#FFF',
  textAlign: 'center',
  background: 'rgba(0, 0, 0, .6)',
  overflow: 'auto',
  transition: 'height .2s',
}));

const Message = styled.p({
  fontSize: '1.2rem',
});

export default function Alert({ show, message }) {
  return (
    <Wrapper
      show={show}
    >
      <Message>
        {message}
      </Message>
    </Wrapper>
  );
}
