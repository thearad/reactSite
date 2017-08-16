import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import {MenuItem, ButtonGroup, Button} from 'react-bootstrap';
import {elastic as Menu} from 'react-burger-menu';
import FaBars from 'react-icons/lib/fa/bars';

class App extends Component {


  render() {
      var buttonGroupInstance = (
    <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <a href="/" className="menu-item">Home</a>
      <a className="menu-item" href="/resume">Resume</a>
      <a className="menu-item" href="/projects">Projects</a>
    </Menu>

  );
    return (
      <div className="App" id="outer-container">
        <div className="App-header">
        {buttonGroupInstance}
        </div>
        <div className="App-body" id="page-wrap">
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
