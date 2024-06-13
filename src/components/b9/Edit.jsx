import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://63fc248e677c415873068d86.mockapi.io/product/${id}`)
      .then((response) => {
        const product = response.data;
        setProduct(response.data);
        setName(product.name);
        setDescription(product.description);
        setImage(product.image);
      })
      .catch((error) => {
        console.error("There was an error fetching users!", error);
      });
  }, []);

  const handleEdit = () => {
    const product = {};
    product.name = name;
    product.id = id;
    product.description = description;
    product.image = image;

    axios
      .put(`https://63fc248e677c415873068d86.mockapi.io/product/${id}`, product)
      .then(() => {
        console.log("Product updated successfully!");
        navigate("/productmanager"); // Chuyển người dùng về trang chính
      })
      .catch((error) => {
        console.error("There was an error fetching users!", error);
      });
  };

  return (
    <>
      <div id="formLogin">
        <form onSubmit={handleEdit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Image</label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Edit;
