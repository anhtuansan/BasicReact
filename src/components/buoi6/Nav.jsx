import "./Nav.css";
import { NavLink } from "react-router-dom";
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function Nav() {
  return (
    <>
      <div className="topnav" id="myTopnav">
        <NavLink to="/" activeClassName="active" exact={true}>
          B6
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>

        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          <i className="fa fa-bars" />
        </a>
      </div>
    </>
  );
}
export default Nav;
