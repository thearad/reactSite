import React, { Component } from 'react';
import {Button, Row, Col} from "react-bootstrap";
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import './Resume.css';
class Resume extends Component {
  render() {
    return (
      <div className="Resume whitespace">
      <Row className="mobile">  
      <div>Download:</div>
      <Button bsSize="large" href="/Resume.docx">{<FaAngleDown/>} DOCX</Button>
      <Button bsSize="large" download="/Resume.pdf" href="/Resume.pdf">{<FaAngleDown/>} PDF  </Button>
      </Row>
      <Row className="immobile">
        <Col xs={6} md={6}>
      	<a href="/Resume.pdf" download="/Resume.pdf">PDF</a> | <a href="/Resume.docx">DOCX</a>
        </Col>
    <Col xs={6} md={6}>
    </Col>
        </Row>
        <Row className="center">
        <iframe scrolling="no" src="https://docs.google.com/document/d/e/2PACX-1vS5pCBoH1NQrFfTodzaHEzs6FqYRBb-9dVBn2tY9px7rrFrrIC_pn1Y-fyQiQMucoKi8U6m4sad3QgF/pub?embedded=true"></iframe>
      	</Row>
      <Row className="immobile">
    <Col xs={6} md={6}>
    </Col>
    <Col xs={6} md={6}>
      	<a download="/Resume.pdf" href="/Resume.pdf">PDF</a> | <a href="/Resume.docx">DOCX</a>
    </Col>
        </Row>
      </div>
    );
  }
}

export default Resume;