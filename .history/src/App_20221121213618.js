import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home page
      </Route>

      <Route path="/starred">This is starred</Route>
    </Switch>
  );
}

export default App;
