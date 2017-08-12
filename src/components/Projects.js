import React, { Component } from 'react';
import {Image, Col, Row, Thumbnail} from 'react-bootstrap';
import FaExternalLink from 'react-icons/lib/fa/external-link';
import './Projects.css';

class Projects extends Component {
  render() {
  	function gravityGif() {
	  alert('You clicked the third ListGroupItem');
	}
    return (
      <div className="Projects">
        <h1>
        Personal Projects & Collaborative Work I am particularly proud of.
        </h1>
        <Row>
        <p>Computer Animation & Graphics:</p>
        </Row>
        <Row>
        <Col xs={6} md={4}>
        <Thumbnail src="/images/compy.jpeg" onClick={gravityGif}>
        <h3> Cube Gravity Physics</h3>
        A program that simulates a single rigid body falling and colliding with a ground plane the linear and angular momentum is calculated from the rigid body measurements.
      	</Thumbnail>
      	</Col>
        
        <Col xs={6} md={4}>
        Cloth Animation
        A program that simulates a piece of cloth made from particles, spring-dampers, and triangular surfaces
		</Col>
		<Col xs={6} md={4}>
		<Thumbnail src="/images/brdfs.png" onClick={gravityGif}>
        <h3>Ashikhmin BRDFs</h3>
        A program that generates an image using the Ashikhmin-Shirely BRDF model.
        </Thumbnail>
        </Col>
        </Row>
        <Row>
        <p>Web Applications</p>
        </Row>
        <Row>
        <Col xs={6} md={4}>
        Shopping Application
        Complete with login page, owner and customer roles, various pages to view products and categories as well as buy, and sql intensive sales analytics page.
        Completed as a collaborative effort with to other developers.
        </Col>
        <Col xs={6} md={4}>
         <Thumbnail src="/images/scicrunch.png" target="_blank" href="https://scicrunch.org/">
        <h3>Scicrunch {<FaExternalLink/>}</h3>
        Collaborated with main developer on features such as file uploading and search result formatting.
        </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
         <Thumbnail src="/images/mrs.png" target="_blank" href="https://ehs.ucsd.edu/myresearchsafety/do/mrsHome">
        <h3>UCSD - EHS {<FaExternalLink/>}</h3>
        Worked on various web applications for researchers at UCSD including CSUA, LHAT, and CHUA.
        </Thumbnail>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Projects;