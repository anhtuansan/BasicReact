import "./NavB6.css";
import { NavLink } from "react-router-dom";


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function NavB6() {
  return (
    <div className="topnav" id="myTopnav">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/productlist" className={({ isActive }) => (isActive ? 'active' : '')}>
        Product List
      </NavLink>
      <a href="#" className="icon" onClick={(e) => { e.preventDefault(); myFunction(); }}>
        <i className="fa fa-bars" />
      </a>
    </div>
  );
}

export default NavB6;
