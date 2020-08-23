import React from 'react';

import { useSelector } from 'react-redux';

import PageHeader from '../components/PageHeader';

export default function IdeasContainer() {
  const { resources, loading } = useSelector((state) => state.ideas);

  if (loading) {
    return (
      <p>수집중...</p>
    );
  }

  return (
    <>
      <PageHeader title="좋은 아이디어들을 구경해요" />
      <ol>
        {resources.map(({ id, who, what }) => (
          <li key={id}>{`${who}의 ${what}`}</li>
        ))}
      </ol>
    </>
  );
}
