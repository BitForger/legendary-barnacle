import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import {HomePage} from "./pages/HomePage";

function App() {
  return (
    <>
    {/*  Header here */}
    <Switch>
      <Route exact path="/" component={HomePage}/>
    </Switch>
    </>
  );
}

export default App;
