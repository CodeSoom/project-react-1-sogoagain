import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import IdeaItemForm from './IdeaItemForm';

describe('IdeaItemForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderIdeaItemForm({ who, what } = {}) {
    render((
      <IdeaItemForm
        fields={{ who, what }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders form for who item', () => {
    renderIdeaItemForm();

    expect(screen.getByLabelText(/누구를 위한 것인가요?/)).toBeInTheDocument();
    expect(screen.getByLabelText(/어떤 것인가요?/)).toBeInTheDocument();
  });

  it('changes input fields', () => {
    renderIdeaItemForm();

    const controls = [
      { label: '누구를 위한 것인가요?', name: 'who', value: '프로그래머' },
      { label: '어떤 것인가요?', name: 'what', value: '맛있는 라면' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(screen.getByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "기여하기" button', () => {
    renderIdeaItemForm();

    fireEvent.submit(screen.getByRole('button', { name: '기여하기' }));

    expect(handleSubmit).toBeCalled();
  });
});
