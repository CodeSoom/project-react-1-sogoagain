import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setField, contributeItem } from '../features/contributingSlice';

import PageHeader from '../components/PageHeader';
import Alert from '../components/Alert';
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

  return (
    <>
      <PageHeader>
        감사합니다
      </PageHeader>
      <IdeaItemForm
        fields={{ who, what }}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Alert show={message !== ''} message={message} />
    </>
  );
}
