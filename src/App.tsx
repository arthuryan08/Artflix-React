import React from 'react';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" exact component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
