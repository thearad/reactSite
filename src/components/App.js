import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import {MenuItem, ButtonGroup, Button, Row} from 'react-bootstrap';
import {elastic as Menu} from 'react-burger-menu';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaEnvelope from 'react-icons/lib/fa/envelope';

class App extends Component {


  render() {
      var buttonGroupInstance = (
    <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <a href="/" className="menu-item">Home</a>
      <a className="menu-item" href="/resume">Resume</a>
      <a className="menu-item" href="/projects">Projects</a>
      <Row className="urls">
      <a target="_blank" href="https://github.com/thearad?tab=repositories">{<FaGithub/>}</a>
      <a target="_blank" href="https://linkedin.com/in/ana-radic-b74475123">{<FaLinkedin/>}</a>
      <a href="mailto:aradic@ucsd.edu">{<FaEnvelope/>}</a>
      </Row>
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
