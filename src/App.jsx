import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import IdeaPage from './pages/IdeaPage';
import ContributingPage from './pages/ContributingPage';

export default function App() {
  return (
    <>
      <Link to="/">
        <Header title="창업하자, 아이디어는 내게 맡겨." />
      </Link>
      <Link to="/contributing">
        아이디어 기여하기
      </Link>
      <Switch>
        <Route exact path="/" component={IdeaPage} />
        <Route path="/contributing" component={ContributingPage} />
      </Switch>
    </>
  );
}
