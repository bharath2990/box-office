import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (<Switch><Route exact path='/'>This is Home page</Route><Switch/>);
}

export default App;
