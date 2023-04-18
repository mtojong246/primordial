import './App.scss';
import React, { Component } from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './Home/home.component';
import Title from './Title/title.component';

class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render () {


    return (
      <Routes>
        <Route path='/' element={<Title />} />
        <Route path='home' element={<Home />} />
      </Routes>
    )
  }
}

export default App;
