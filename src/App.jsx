import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import IdeaPage from './pages/IdeaPage';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={IdeaPage} />
      </Switch>
    </div>
  );
}
