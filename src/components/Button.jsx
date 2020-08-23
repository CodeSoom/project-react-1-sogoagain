import styled from '@emotion/styled';

import { white, primary, secondary } from '../styles/constants';

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
  ':active': {
    backgroundColor: secondary,
  },
  ':disabled': {
    backgroundColor: secondary,
  },
});

export default Button;
