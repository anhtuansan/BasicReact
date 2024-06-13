import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Edit(){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(()=>{
      axios 
      .get(`https://63fc248e677c415873068d86.mockapi.io/product/${id}`)
      .then((response) =>{
        setProduct (response.data);
        setName (product.name);
        setDescription (product.description);
        setImage (product.image);
        })
        .catch((error) => {
          console.error("There was an error fetching users!", error);
        });
        }, []);
    const handleEdit = () =>{

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