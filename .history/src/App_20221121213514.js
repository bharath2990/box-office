import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home page
      </Route>
    </Switch>
  );
}

export default App;
