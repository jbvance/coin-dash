import React, { Component } from 'react';
import './App.css';
import styled, { css } from 'styled-components';
import WelcomeMessage from './WelcomeMessage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div><WelcomeMessage /></div>  
      </div>
    );
  }
}

export default App;
