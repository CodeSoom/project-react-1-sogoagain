import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const control = {
    label: '누구를 위한 것인가요?', name: 'who', type: 'text', value: '프로그래머',
  };
  const handleChange = jest.fn();

  function renderTextField() {
    return render(
      <TextField
        label={control.label}
        name={control.name}
        type={control.type}
        value={control.value}
        onChange={handleChange}
      />,
    );
  }

  beforeEach(() => {
    handleChange.mockClear();
  });

  it('renders input controls', () => {
    const { getByLabelText } = renderTextField();

    expect(getByLabelText(control.label).value).toBe('프로그래머');
  });

  it('changes input controls', () => {
    const { getByLabelText } = renderTextField();

    fireEvent.change(getByLabelText(control.label), { target: { value: '디자이너' } });

    expect(handleChange).toBeCalledWith({ name: control.name, value: '디자이너' });
  });
});
