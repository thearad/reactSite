import React, { Component } from 'react';
import {Popover, Overlay, Row, Col} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
   constructor(props, context) {
    super(props, context);

    this.handleEnter = e => {
      this.setState({ target: e.target, show: true });
    };
    this.handleLeave = e => {
      this.setState({ target: e.target, show: false });
    };
    this.state = { show: false };
  }
  render() {
    return (
      <div className="Home">
      <Row className="title" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
      Ana Radic 
        <Overlay
          show={this.state.show}
          target={this.state.target}
          placement="bottom"
          container={this}
          containerPadding={0}
        >

          <Popover id="popover-contained" >
            <h4><strong>Hello!</strong></h4>I'm Ana, a 25 year-old Senior Software Engineer living in San Diego.
          	I love making things, fixing things, and helping people through programming. 
          	I've worked as a web application developer, have experience in mobile development, computer animation, and machine learning.
            Currently, I'm in a great team at DivX as a backend developer working mainly with NodeJS and AWS resources.
            My interests include cooking, video games, and bettering myself.
          </Popover>
        </Overlay>
        </Row>
        <Row className="subtitle">
		<Col xs={6} md={4}>
		</Col>
		<Col xs={6} md={8}>
        Senior Software Engineer
        </Col>
        </Row>
      </div>
    );
  }
}

export default Home;