import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Home/Landing';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import  {Movie} from './components/Layout/Home/Movie';

class App extends Component {
  render() {
  return (
    <Provider store= {store}>
      <Router>
        <div>
         <Navbar />
         <Route exact path= '/' component= {Landing} />
         <Route exact path= '/movie/:id' component= {Movie} />
       </div>
      </Router>
    </Provider>
  );
 }
}

export default App;
