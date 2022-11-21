import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          This is home page
        </Route>

        <Route exact path="/starred">
          This is starred
        </Route>

        <Route>Page is not found</Route>
      </Switch>
    </div>
  );
}

export default App;
