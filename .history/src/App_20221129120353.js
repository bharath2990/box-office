import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Nav from './components/Nav';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route exact path="/show/:id">
        <Show />
      </Route>
      <Route>
        <div>Not found</div>
      </Route>
    </Switch>
  );
}

export default App;
