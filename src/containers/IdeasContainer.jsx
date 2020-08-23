import React from 'react';

import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import PageHeader from '../components/PageHeader';

const List = styled.ol({
  fontSize: '1.5rem',
  animation: 'fade-in 1s ease-in',
});

const Loading = styled.p({
  fontSize: '1.5rem',
  animation: 'fade-in .5s ease-in',
});

export default function IdeasContainer() {
  const { resources, loading } = useSelector((state) => state.ideas);

  return (
    <>
      <PageHeader>
        이런 아이디어들은 어때요?
      </PageHeader>
      {loading && <Loading>수집중...</Loading>}
      {!loading && (
        <List>
          {resources.map(({ id, who, what }) => (
            <li key={id}>{`${who}의 ${what}`}</li>
          ))}
        </List>
      )}

    </>
  );
}
