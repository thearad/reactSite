import React, { Component } from 'react';
import './App.css';
import {Row} from 'react-bootstrap';
import {elastic as Menu} from 'react-burger-menu';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import Particles from 'react-particles-js';

class App extends Component {


  render() {
      var buttonGroupInstance = (
    <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <a href="/" className="menu-item">Home</a>
      <a className="menu-item" href="/resume">Resume</a>
      <a className="menu-item" href="/projects">Projects</a>
      <Row className="urls">
      <a target="_blank noopener noreferrer" href="https://github.com/thearad?tab=repositories">{<FaGithub/>}</a>
      <a target="_blank noopener noreferrer" href="https://linkedin.com/in/ana-radic-b74475123">{<FaLinkedin/>}</a>
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
        <Particles className="particle-background"
                                   style={{position: "absolute", top: 0, left: 0}}
                                   params={{
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": "#373a47"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Ski_trail_rating_symbol_red_circle.png",
        "width": 30,
        "height": 30
      }
    },
    "opacity": {
      "value": 0.1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0.5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 8,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 14.607425441265988,
        "size_min": 4.86914181375533,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#ddd",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "top-right",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 640.9588744762158,
        "rotateY": 700
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 200,
        "size": 4,
        "duration": 10,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}}/>
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
