import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Home/Landing';
import store from './store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
  return (
    <Provider store= {store}>
      <Navbar />
      <Landing />
    </Provider>
  );
 }
}

export default App;
