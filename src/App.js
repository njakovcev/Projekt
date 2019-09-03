import React from 'react';

import Header from './components/Header'
import MainPublic from './components/MainPublic'
import Footer from './components/Footer'

import './App.css';

class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <MainPublic />
        <Footer />



      </div>
    )
  }
}

export default App;
