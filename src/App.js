import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/HomePage/HomePage'


class App extends Component {
  render(){
      return (
        <BrowserRouter>
              <Navbar />
              <Route exact path='/' component={HomePage} />
        </BrowserRouter>
      )
  }
}

export default App;

