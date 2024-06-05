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

function ChildCar({ cars }) {
  return (
    <Container>
      <Row>
        {cars.map((car, index) => (
          <Col key={car.id} sm="12" md="6" lg="3" className="mb-4">
            <Card>
              <CardImage
                src={car.image}
                alt={car.carName}
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle>{car.carName}</CardTitle>
                <CardText>{car.carColor}</CardText>
                <Btn color="info">Detail</Btn>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default ChildCar;




// function ChildCar({ cars }) {
//     return (
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Index</th>
//               <th>Car Name</th>
//               <th>Color</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cars.map((car, index) => (
//               <tr key={index}>
//                 <td>{index}</td>
//                 <td className={car.carColor}>{car.carName}</td>
//                 <td style={{ color: car.carColor }}>{car.carColor}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
  
//   export default ChildCar;
  
