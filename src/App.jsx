import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import IdeaPage from './pages/IdeaPage';
import IdeasPage from './pages/IdeasPage';
import ContributingPage from './pages/ContributingPage';

export default function App() {
  return (
    <>
      <Link to="/">
        <Header title="창업하자! 아이디어는 내게 맡겨!" />
      </Link>
      <Link to="/ideas">
        구경가기
      </Link>
      <Link to="/contributing">
        기여하기
      </Link>
      <Switch>
        <Route exact path="/" component={IdeaPage} />
        <Route path="/ideas" component={IdeasPage} />
        <Route path="/contributing" component={ContributingPage} />
      </Switch>
    </>
  );
}
