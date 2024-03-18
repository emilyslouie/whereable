import { Link } from "wouter";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="name" href="/whereable/">
        {"WHEREable"}
      </Link>
      <div className="link-items">
        <Link className="link" href="/whereable/learn">
          {"Learn"}
        </Link>
        <Link className="link" href="/whereable/about">
          {"About"}
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
