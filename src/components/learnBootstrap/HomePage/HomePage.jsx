// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "./HomePage.css";
// import Image from "react-bootstrap/Image";
// import exampleImage from "../../../assets/images/avatar.jpg";

// import {
//   MDBContainer as Container2,
//   MDBRow as Row,
//   MDBCol as Col,
//   MDBCard as Card,
//   MDBCardBody as CardBody,
//   MDBCardTitle as CardTitle,
//   MDBCardText as CardText,
//   MDBCardImage as CardImage,
//   MDBBtn as Btn,
// } from "mdb-react-ui-kit";
// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     description: "Description for product 1",
//     image: exampleImage,
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     description: "Description for product 2",
//     image: exampleImage,
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     description: "Description for product 3",
//     image: exampleImage,
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     description: "Description for product 4",
//     image: exampleImage,
//   },
//   {
//     id: 5,
//     name: "Product 5",
//     description: "Description for product 5",
//     image: exampleImage,
//   },
//   {
//     id: 6,
//     name: "Product 6",
//     description: "Description for product 6",
//     image: exampleImage,
//   },
// ];

// import {
//   MDBContainer as Container2,
//   MDBRow as Row,
//   MDBCol as Col,
//   MDBCard as Card,
//   MDBCardBody as CardBody,
//   MDBCardTitle as CardTitle,
//   MDBCardText as CardText,
//   MDBCardImage as CardImage,
//   MDBBtn as Btn,
// } from "mdb-react-ui-kit";

// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     description: "Description for product 1",
//     image: exampleImage,
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     description: "Description for product 2",
//     image: exampleImage,
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     description: "Description for product 3",
//     image: exampleImage,
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     description: "Description for product 4",
//     image: exampleImage,
//   },
//   {
//     id: 5,
//     name: "Product 5",
//     description: "Description for product 5",
//     image: exampleImage,
//   },
//   {
//     id: 6,
//     name: "Product 6",
//     description: "Description for product 6",
//     image: exampleImage,
//   },
// ];

// function HomePage() {
//   const seasons = ["Spring", "Summer", "Autumn", "Winter"];

//   // {seasons.map((season) => (
//   //   <li key={season.id}>{season}</li>
//   return (
//     <>
//       <Navbar expand="lg" className="bg-body-tertiary" id="test">
//         <Container>
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">Link</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">
//                   Something
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>

//           <Image src={exampleImage} roundedCircle id="image" />
//         </Container>
//       </Navbar>

//       {/* <div className="container"> */}
//       <div className="jumbotron" id="tieuDe">
//         <h1>Bootstrap Tutorial</h1>
//         <p>
//           Bootstrap is the most popular HTML, CSS, and JS framework for
//           developing responsive, mobile-first projects on the web.
//         </p>
//         <p>This is some text.</p>
//         <p>This is another text.</p>
//       </div>

//       {/* </div> */}

//       <div id="listItem">
//         <Container>
//           <Row>
//             {products.map((product, index) => (
//               <Col key={product.id} sm="12" md="6" lg="3" className="mb-4">
//                 <Card>
//                   <CardImage
//                     src={product.image}
//                     alt={product.name}
//                     top
//                     hover
//                     overlay="white-slight"
//                   />
//                   <CardBody>
//                     <CardTitle>{product.name}</CardTitle>
//                     <CardText>{product.description}</CardText>
//                     <Btn color="info">Detail</Btn>
//                   </CardBody>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </div>

//       {/* Footer */}
//       <footer
//         className="text-center text-lg-start bg-body-tertiary text-muted"
//         id="footer"
//       >
//         {/* Section: Social media */}
//         <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
//           {/* Left */}
//           <div className="me-5 d-none d-lg-block">
//             <span>Get connected with us on social networks:</span>
//           </div>
//           {/* Left */}
//           {/* Right */}
//           <div>
//             <a href="" className="me-4 text-reset">
//               <i className="fab fa-facebook-f" />
//             </a>
//             <a href="" className="me-4 text-reset">
//               <i className="fab fa-twitter" />
//             </a>
//             <a href="" className="me-4 text-reset">
//               <i className="fab fa-google" />
//             </a>
//             <a href="" className="me-4 text-reset">
//               <i className="fab fa-instagram" />
//             </a>
//             <a href="" className="me-4 text-reset">
//               <i className="fab fa-linkedin" />
//             </a>
//             <a href="" className="me-4 text-reset">
//               <i className="fab fa-github" />
//             </a>
//           </div>
//           {/* Right */}
//         </section>
//         {/* Section: Social media */}
//         {/* Section: Links  */}
//         <section className="">
//           <div className="container text-center text-md-start mt-5">
//             {/* Grid row */}
//             <div className="row mt-3">
//               {/* Grid column */}
//               <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
//                 {/* Content */}
//                 <h6 className="text-uppercase fw-bold mb-4">
//                   <i className="fas fa-gem me-3" />
//                   Company name
//                 </h6>
//                 <p>
//                   Here you can use rows and columns to organize your footer
//                   content. Lorem ipsum dolor sit amet, consectetur adipisicing
//                   elit.
//                 </p>
//               </div>
//               {/* Grid column */}
//               {/* Grid column */}
//               <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
//                 {/* Links */}
//                 <h6 className="text-uppercase fw-bold mb-4">Products</h6>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Angular
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     React
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Vue
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Laravel
//                   </a>
//                 </p>
//               </div>
//               {/* Grid column */}
//               {/* Grid column */}
//               <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
//                 {/* Links */}
//                 <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Pricing
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Settings
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Orders
//                   </a>
//                 </p>
//                 <p>
//                   <a href="#!" className="text-reset">
//                     Help
//                   </a>
//                 </p>
//               </div>
//               {/* Grid column */}
//               {/* Grid column */}
//               <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
//                 {/* Links */}
//                 <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
//                 <p>
//                   <i className="fas fa-home me-3" /> New York, NY 10012, US
//                 </p>
//                 <p>
//                   <i className="fas fa-envelope me-3" />
//                   info@example.com
//                 </p>
//                 <p>
//                   <i className="fas fa-phone me-3" /> + 01 234 567 88
//                 </p>
//                 <p>
//                   <i className="fas fa-print me-3" /> + 01 234 567 89
//                 </p>
//               </div>
//               {/* Grid column */}
//             </div>
//             {/* Grid row */}
//           </div>
//         </section>
//         {/* Section: Links  */}
//         {/* Copyright */}
//         <div
//           className="text-center p-4"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
//         >
//           © 2021 Copyright:
//           <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
//             MDBootstrap.com
//           </a>
//         </div>
//         {/* Copyright */}
//       </footer>
//       {/* Footer */}
//     </>
//   );
// }
