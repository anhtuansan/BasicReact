// import "./Nav.css";

import { useNavigate } from "react-router-dom";



function B6() {
  const navigate = useNavigate();

  function chuyenTrang() {
    navigate("/test");
  }
  //navigate("/about");
  return (
    <>
      <h2>B6</h2>
      <button type="button" className="btn btn-info" onClick={chuyenTrang}>Click Here</button>

    </>
  );
}
export default B6;
