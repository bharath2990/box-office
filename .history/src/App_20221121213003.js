import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (<switch><Route exact path='/'>This is Home page</Route><switch/>);
}

export default App;
