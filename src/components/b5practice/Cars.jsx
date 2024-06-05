import React, { useState } from 'react';
import exampleImage from '../../assets/images/avatar.jpg';
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBCard as Card,
  MDBCardBody as CardBody,
  MDBCardTitle as CardTitle,
  MDBCardText as CardText,
  MDBCardImage as CardImage,
  MDBBtn as Btn
} from 'mdb-react-ui-kit';
import ChildCar from './ChildCar';

class Car {
  constructor(carName, carColor, image) {
    this.carName = carName;
    this.carColor = carColor;
    this.image = image;
  }
}

// function ChildCar({ cars }) {
//   return (
//     <Container>
//       <Row>
//         {cars.map((car, index) => (
//           <Col key={car.id} sm="12" md="6" lg="3" className="mb-4">
//             <Card>
//               <CardImage
//                 src={car.image}
//                 alt={car.carName}
//                 top
//                 hover
//                 overlay="white-slight"
//               />
//               <CardBody>
//                 <CardTitle>{car.carName}</CardTitle>
//                 <CardText>{car.carColor}</CardText>
//                 <Btn color="info">Detail</Btn>
//               </CardBody>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

function Cars() {
  const [cars, setCars] = useState([]);

  const changeName = () => {
    setCars([
      new Car('BMW', 'Black', exampleImage),
      new Car('Audi', 'White', exampleImage),
      new Car('Mercedes', 'Red', exampleImage),
      new Car('Tesla', 'Blue', exampleImage),
      new Car('Toyota', 'Green', exampleImage),
      new Car('Ford', 'Yellow', exampleImage),
    ]);
  };

  return (
    <>
      <button onClick={changeName} type="button" className="btn btn-primary mb-3">
        Click Me!
      </button>
      <ChildCar cars={cars} />
    </>
  );
}

export default Cars;
