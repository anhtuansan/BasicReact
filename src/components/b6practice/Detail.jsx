import "./Detail.css";

import exampleImage from "../../assets/images/avatar.jpg";
import {
  MDBContainer as Container2,
  MDBRow as Row,
  MDBCol as Col,
  MDBCard as Card,
  MDBCardBody as CardBody,
  MDBCardTitle as CardTitle,
  MDBCardText as CardText,
  MDBCardImage as CardImage,
  MDBBtn as Btn,
} from "mdb-react-ui-kit";
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for product 1",
    image: exampleImage,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for product 2",
    image: exampleImage,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description for product 3",
    image: exampleImage,
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description for product 4",
    image: exampleImage,
  },
  {
    id: 5,
    name: "Product 5",
    description: "Description for product 5",
    image: exampleImage,
  },
  {
    id: 6,
    name: "Product 6",
    description: "Description for product 6",
    image: exampleImage,
  },
];
function Detail() {

  const product = products[5];
  console.log(product);

  return (
    <>
      <div id="detail">
        <Card>
          <CardImage
            src={product.image}
            alt={product.name}
            top
            hover
            overlay="white-slight"
          />
          <CardBody>
            <CardTitle>{product.name}</CardTitle>
            <CardText>{product.description}</CardText>
          </CardBody>
        </Card>
      </div>
      <h2>Details</h2>
    </>
  );
}
export default Detail;

