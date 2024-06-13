import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ProductManager() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const handleEdit = (id) => {
    const path = "/edit/" + id;
    navigate(path);
  };
  const handleDelete =(id) =>{
    const path ="/delete/" + id;
    navigate(path)
  }

  useEffect(() => {
    axios
      .get("https://63fc248e677c415873068d86.mockapi.io/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching users!", error);
      });
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.image}</td>
              <td>
                {" "}
                <Button
                  variant="primary"
                  className="mr-2"
                  onClick={() => handleEdit(product.id)}
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
export default ProductManager;
