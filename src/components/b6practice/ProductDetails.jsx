import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  MDBCard as Card,
  MDBCardBody as CardBody,
  MDBCardTitle as CardTitle,
  MDBCardText as CardText,
  MDBCardImage as CardImage,
} from "mdb-react-ui-kit";
import exampleImage from "../../assets/images/avatar.jpg";

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

const ProductDetail = () => {
  const { id } = useParams();
  // const product = products.find((product) => product.id == id); 
  const [product, setProduct] = useState([]);
useEffect(()=>{
  axios 
  .get(`https://63fc248e677c415873068d86.mockapi.io/product/${id}`)
  .then((response) =>{
    setProduct(response.data)
    })
    .catch((error) => {
      console.error("There was an error fetching users!", error);
    });
    }, []);
  return (
    <Container>
      {product ? (
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
      ) : (
        <p>Product not found</p>
      )}
    </Container>
  );
};

export default ProductDetail;
