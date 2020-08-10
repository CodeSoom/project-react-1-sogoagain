import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setField, contributeItem } from '../features/contributingSlice';

import PageHeader from '../components/PageHeader';
import IdeaItemForm from '../components/IdeaItemForm';

export default function ContributingContainer() {
  const dispatch = useDispatch();
  const { loading, message, fields: { who, what } } = useSelector((state) => state.contributing);

  const handleChange = ({ name, value }) => {
    dispatch(setField({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(contributeItem());
  };

  if (loading) {
    return (
      <p>정리중...</p>
    );
  }

  return (
    <>
      <PageHeader title="아이디어 기여" />
      <IdeaItemForm
        fields={{ who, what }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <p>{message}</p>
    </>
  );
}
