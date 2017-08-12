import React, { Component } from 'react';
import './Resume.css';
import {Button} from "react-bootstrap";

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
      	<a href="">PDF</a> | <a href="">DOCX</a>
      	<br/>
        <iframe height="200%" width="55%" src="https://docs.google.com/document/d/e/2PACX-1vS5pCBoH1NQrFfTodzaHEzs6FqYRBb-9dVBn2tY9px7rrFrrIC_pn1Y-fyQiQMucoKi8U6m4sad3QgF/pub?embedded=true"></iframe>
      	<br/>
      	<a href="">PDF</a> | <a href="">DOCX</a>
      </div>
    );
  }
}

export default Resume;