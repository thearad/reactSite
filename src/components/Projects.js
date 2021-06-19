import React from 'react';
import {Image, Col, Row, Thumbnail, Modal, Button} from 'react-bootstrap';
import FaExternalLink from 'react-icons/lib/fa/external-link';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import './Projects.css';

//var createReactClass = require('create-react-class');

class CubeModal extends React.Component {
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg" dialogClassName="larger">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Rigid Body Physics</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
      <Col xs={6} md={6}>
        <Image src="/images/cube0.5.gif" thumbnail />
      </Col>
      <Col xs={6} md={6}>
        <Image src="/images/cube111.gif" thumbnail />
      </Col>
        </Row>
      <Row className="pad">
      <Col xs={6} md={6}>
      <p>A cube with depth, height, and width all set to 1, with a mass of 0.5. Using the parameters from the UI, a rotational inertia matrix is calculated.</p>
      </Col>
      <Col xs={6} md={6}>
      <p>Now by modifying the mass to 1, this cube's acceleration is greater than the previous example's, due to the mass increasing by 0.5.</p>
      </Col>
      </Row>
        <Row>
      <Col xs={6} md={6}>
        <Image src="/images/cube40.5.gif" thumbnail />
      </Col>
      <Col xs={6} md={6}>
        <Image src="/images/cube44.gif" thumbnail />
      </Col>
        </Row>
        <Row>

      <Col xs={12} md={12} className="pad">
      Asymmetrical rigid bodies are also able to be modeled with accurate rotational inertia and gravitational force with this model as is demonstrated by these examples. The example on the left shows a rigid body with the height 4 times that of the depth and width, on the right the rigid body has these proportions reversed.
      </Col>
      </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class ClothModal extends React.Component{
  render() {
    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-md">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-md">Cloth Simulation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Row>
      <Col xs={6} md={6}>
        <Image src="/images/cloth.gif" thumbnail />
      </Col>
      <Col xs={6} md={6}>
      <h5>A 55 by 45 particle cloth whose movement due to wind force and gravity is determined through spring damper equations. For each time-step there are 15 spring iterations in which the program verifies that all springs satisfy the necessary constraints, then the position of each particle at the next time step is calculated. Three particles on the top left and right corners of the cloth remain fixed, due to a boolean, so a full effect can be visualized.</h5>
      </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class ShopModal extends React.Component{
  constructor(props, context) {
  	super(props, context);

    this.state =  {
      enterUrl: "../images/entering_still.jpg",
      historyUrl: "../images/history_still.jpg",
      purchaseUrl: "../images/purchase_still.jpg",
      cartUrl: "../images/producttoCart.jpg",
      addUrl: "../images/add_still.jpg"
    };
  };
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sp" dialogClassName="larger">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sp">Shopping Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <Row className="pad">
      <Col xs={6} md={6}>
        <Image src={this.state.enterUrl} onMouseLeave={()=>this.setState({ enterUrl: "/images/entering_still.jpg" })} onMouseEnter={()=>this.setState({ enterUrl: "/images/enteringShopAppOWNER.gif" })} thumbnail />
      </Col>
      <Col xs={6} md={6}>
        <Image src="/images/salesAnalyticsOWNER.gif" thumbnail/>
      </Col>
      </Row>
      <Row className="pad">
      <Col xs={6} md={6}>
      <h5>The gifs above and to the right are demonstrations of several actions that can be completed when entering the application as an owner of a product or business. These include:
      <ul></ul>
      <ul>{<FaAngleRight/>} signing up and logging in (top left)</ul> 
      <ul>{<FaAngleRight/>} adding a category in which products can be placed (bottom right)</ul>
      <ul>{<FaAngleRight/>} viewing a sales analytics page (top right)</ul> 
      This sales analytics page sorts products and the 50 States using a top-k sorting method. Top-K sorts products along the top row by gross profits and  the 50 States along the first column by total sales. Each cell in the sales analytics chart demonstrates the total specified product purchased in that State. These analytics are gathered quickly in the application through precomputed sql tables that join and sort several tables in the database.</h5>
      </Col>
      <Col xs={6} md={6}>
        <Image src={this.state.addUrl} onMouseLeave={()=>this.setState({ addUrl: "/images/add_still.jpg" })} onMouseEnter={()=>this.setState({ addUrl: "/images/addingaCategoryOWNER.gif"  })} thumbnail/>
      </Col>
      </Row>
      <Row className="pad">
      <Col xs={6} md={6}>
      <Image src={this.state.cartUrl} onMouseLeave={()=>this.setState({ cartUrl: "/images/producttoCart.jpg" })} onMouseEnter={()=>this.setState({ cartUrl: "/images/producttoCartCUSTOMER.gif" })} thumbnail />
      </Col>
      <Col xs={6} md={6}>
        <Image src={this.state.purchaseUrl} onMouseLeave={()=>this.setState({ purchaseUrl: "/images/purchase_still.jpg" })} onMouseEnter={()=>this.setState({ purchaseUrl: "/images/purchaseCUSTOMER.gif" })} thumbnail />
      </Col>
      <br/>
      </Row>
      <Row>
      <Col xs={6} md={6}>
        <Image src={this.state.historyUrl} onMouseLeave={()=>this.setState({ historyUrl: "/images/history_still.jpg" })} onMouseEnter={()=>this.setState({ historyUrl: "/images/purchasehistoryCUSTOMER.gif" })} thumbnail />
      </Col>
      <Col xs={6} md={6}>
      <h5> The two gifs above and the gif to the left depict several actions that customers can take within the shop app. These include:
      <ul></ul>
      <ul>{<FaAngleRight/>} placing a product in a virtual cart (top left)</ul> 
      <ul>{<FaAngleRight/>} purchasing the contents of the cart (top right)</ul>
      <ul>{<FaAngleRight/>} viewing which purchases they have made in the past (bottom left)</ul> 
      Users can also sign-up and log-on as a customer in the same way an owner can.</h5>
      </Col>
      <br/> 
      </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class BrdfModal extends React.Component {
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-br">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-br">Bidirectional Reflectance Distribution Functions (BRDFs)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
        <Col xs={12} md={12}>
        <Image src="/images/brdfs2x2.png" thumbnail/>
        </Col>
        <Col xs={12} md={12}>
        This is a 2x2 samples per pixel picture with a depth of 8 reflection ray bounces. The location of each sample is determined using anti-aliasing, a combination of jittered and Shirley (along with super-sampling).
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={12}>
        <Image src="/images/brdfs.png" thumbnail/>
        </Col>
        <Col xs={12} md={12}>
        The above image is the same Ashikhmin-Shirley BRDF implementation with 10x10 samples and a depth of 8. The Ashikhmin-Shirley BRDF was implemented through forward-evaluation of the BRDF, recursive ray reflection, and functions to determine where the reflection ray will be sampled from.
        </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class Projects extends React.Component {
    constructor(props) {
    super(props);
    this.state = {brdfShow: false, cubeShow: false, clothShow: false, shopShow: false, cubeUrl: "/images/still_cube.jpg", clothUrl: "/images/still_cloth.jpg", shopUrl: "/images/still_shop.jpg"};
  }
  render() {
     let cubeClose = () => this.setState({ cubeShow: false });
     let clothClose = () => this.setState({ clothShow: false });
     let shopClose = () => this.setState({ shopShow: false });
     let brdfClose = () => this.setState({ brdfShow: false });
    return (
      <div className="Projects">
        <CubeModal show={this.state.cubeShow} onHide={cubeClose} />
        <ClothModal show={this.state.clothShow} onHide={clothClose} />
        <ShopModal show={this.state.shopShow} onHide={shopClose} />
        <BrdfModal show={this.state.brdfShow} onHide={brdfClose} />
        <Row>
        <div className="category">Computer Animation</div>
        </Row>
        <Row>
        <Col xs={12} md={4}>
        <Thumbnail href="#" src={this.state.cubeUrl} onMouseLeave={()=>this.setState({ cubeUrl: "/images/still_cube.jpg" })} onMouseEnter={()=>this.setState({ cubeUrl: "/images/cube44cut.gif" })} onClick={()=>this.setState({ cubeShow: true })}>
        <h4> Rigid Body Physics</h4>
        A program that simulates a single rigid body falling and colliding with a ground plane the linear and angular momentum is calculated from the rigid body measurements.
      	</Thumbnail>
      	</Col>
        <Col xs={12} md={4}>
        <Thumbnail href="#" src="/images/brdfs.png" onClick={()=>this.setState({ brdfShow: true })}>
        <h4>Ashikhmin BRDFs</h4>
        A program that generates an image using the Ashikhmin-Shirley Bidirectional Reflectance Distribution Function (BRDF) model.
        </Thumbnail>
        </Col>
        <Col xs={12} md={4}>
        <Thumbnail href="#" src={this.state.clothUrl} onMouseLeave={()=>this.setState({ clothUrl: "/images/still_cloth.jpg" })} onMouseEnter={()=>this.setState({ clothUrl: "/images/cloth.gif" })} onClick={()=>this.setState({ clothShow: true })}>
        <h4>Cloth Animation</h4>
        A program that simulates a piece of cloth made from particles, spring-dampers, and triangular surfaces
		</Thumbnail>
        </Col>
        </Row>
        <Row>
        <div className="category">Web Applications</div>
        </Row>
        <Row>
        <Col xs={12} md={4}>
         <Thumbnail src="/images/scicrunch.png" target="_blank" href="https://scicrunch.org/">
        <h4>Scicrunch {<FaExternalLink/>}</h4>
        Collaborated with main developer, completed features such as file uploading and search result formatting.
        </Thumbnail>
        </Col>
        <Col xs={12} md={4}>
        <Thumbnail href="#" src={this.state.shopUrl} onMouseLeave={()=>this.setState({ shopUrl: "images/still_shop.jpg"})} onMouseEnter={()=>this.setState({ shopUrl:"/images/addingaCategoryOWNER.gif"})} onClick={()=>this.setState({shopShow: true})}>
        <h4>Shopping Application</h4>
        Completed various pages to view and buy products and categories for owner and customer roles. Completed collaborative tasks including determining database architecture, and writing queries for sql intensive sales analytics.
        Full application completed as a collaborative effort with two other developers.
        </Thumbnail>
        </Col>
        <Col xs={12} md={4}>
         <Thumbnail src="/images/mrs.png" target="_blank" href="https://ehs.ucsd.edu/myresearchsafety/do/mrsHome">
        <h4>UCSD - EHS {<FaExternalLink/>}</h4>
        Worked on various web applications for researchers at UCSD including CSUA, LHAT, and CHUA.
        </Thumbnail>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Projects;
