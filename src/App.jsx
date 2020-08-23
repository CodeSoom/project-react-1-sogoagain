import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

import Header from './components/Header';
import Footer from './components/Footer';
import IdeaPage from './pages/IdeaPage';
import IdeasPage from './pages/IdeasPage';
import ContributingPage from './pages/ContributingPage';

import {
  HEADER_HEIGHT, FOOTER_HEIGHT, NAV_HEIGHT, EXTRA_SMALL,
} from './styles/constants';

const PageWrapper = styled.section({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - ${NAV_HEIGHT})`,
});

const NavWrapper = styled.nav({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: NAV_HEIGHT,
  maxWidth: EXTRA_SMALL,
  margin: '0 auto',
  '& a': {
    fontSize: '1.5rem',
  },
});

export default function App() {
  return (
    <>
      <Link to="/">
        <Header primary="창업하자!" secondary="아이디어는 내게 맡겨!" />
      </Link>
      <PageWrapper>
        <Switch>
          <Route exact path="/" component={IdeaPage} />
          <Route path="/ideas" component={IdeasPage} />
          <Route path="/contributing" component={ContributingPage} />
        </Switch>
      </PageWrapper>
      <NavWrapper>
        <Link to="/ideas">
          구경가기
        </Link>
        <Link to="/contributing">
          기여하기
        </Link>
      </NavWrapper>
      <Footer />
    </>
  );
}
