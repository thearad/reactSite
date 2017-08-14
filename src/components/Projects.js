import React, { Component } from 'react';
import {Image, Col, Row, Thumbnail, Modal, Button} from 'react-bootstrap';
import FaExternalLink from 'react-icons/lib/fa/external-link';
import './Projects.css';

const CubeModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

const ClothModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});
const ShopModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

const BrdfModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

function gravityGif() {
    alert('You clicked the third ListGroupItem');
}

class Projects extends Component {
    constructor(props) {
    super(props);
    this.state = {brdfShow: false, cubeShow: false, clothShow: false, shopShow: false, cubeUrl: "/images/still_cube.jpg", clothUrl: "/images/still_cloth.jpg", shopUrl: "images/still_shop.jpg"};
  }
  render() {
     let cubeClose = () => this.setState({ cubeShow: false });
     let clothClose = () => this.setState({ clothShow: false });
     let shopClose = () => this.setState({ shopShow: false });
     let brdfClose = () => this.setState({ brdfShow: false });
    return (
      <div className="Projects">
        <h1>
        Personal Projects & Collaborative Work I am particularly proud of.
        </h1>
        <CubeModal show={this.state.cubeShow} onHide={cubeClose} />
        <ClothModal show={this.state.clothShow} onHide={clothClose} />
        <ShopModal show={this.state.shopShow} onHide={shopClose} />
        <BrdfModal show={this.state.brdfShow} onHide={brdfClose} />
        <Row>
        <p>Computer Animation & Graphics:</p>
        </Row>
        <Row>
        <Col xs={6} md={4}>
        <Thumbnail src={this.state.cubeUrl} onMouseLeave={()=>this.setState({ cubeUrl: "/images/still_cube.jpg" })} onMouseEnter={()=>this.setState({ cubeUrl: "/images/cube44cut.gif" })} onClick={()=>this.setState({ cubeShow: true })}>
        <h3> Cube Gravity Physics</h3>
        A program that simulates a single rigid body falling and colliding with a ground plane the linear and angular momentum is calculated from the rigid body measurements.
      	</Thumbnail>
      	</Col>
        <Col xs={6} md={4}>
        <Thumbnail src="/images/brdfs.png" onClick={()=>this.setState({ brdfShow: true })}>
        <h3>Ashikhmin BRDFs</h3>
        A program that generates an image using the Ashikhmin-Shirely BRDF model.
        </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
        <Thumbnail src={this.state.clothUrl} onMouseLeave={()=>this.setState({ clothUrl: "/images/still_cloth.jpg" })} onMouseEnter={()=>this.setState({ clothUrl: "/images/cloth.gif" })} onClick={()=>this.setState({ clothShow: true })}>
        <h3>Cloth Animation</h3>
        A program that simulates a piece of cloth made from particles, spring-dampers, and triangular surfaces
		</Thumbnail>
        </Col>
        </Row>
        <Row>
        <p>Web Applications</p>
        </Row>
        <Row>
        <Col xs={6} md={4}>
         <Thumbnail src="/images/scicrunch.png" target="_blank" href="https://scicrunch.org/">
        <h3>Scicrunch {<FaExternalLink/>}</h3>
        Collaborated with main developer on features such as file uploading and search result formatting.
        </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
        <Thumbnail src={this.state.shopUrl} onMouseLeave={()=>this.setState({ shopUrl: "images/still_shop.jpg"})} onMouseEnter={()=>this.setState({ shopUrl:"/images/addingaCategoryOWNER.gif"})} onClick={()=>this.setState({shopShow: true})}>
        <h3>Shopping Application</h3>
        Complete with login page, owner and customer roles, various pages to view products and categories as well as buy, and sql intensive sales analytics page.
        Completed as a collaborative effort with to other developers.
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