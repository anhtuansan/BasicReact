// import "./Nav.css";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  return (
    <>
      <h2>User detail</h2>
      <p>User ID: {id}</p>
    </>
  );
}
export default UserDetails;
