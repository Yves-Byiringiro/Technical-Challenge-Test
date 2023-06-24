import { NavLink } from "react-router-dom";
import { MdSearch, MdPersonOutline, MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="container">
      <div className="container">
        <img src="/logo.png" className="logo" alt="" />
      </div>
      <ul>
        <li>
          <NavLink to={"/"}>HOME</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>GALLERY</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>CONTACT</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>BLOG</NavLink>
        </li>
      </ul>
      <ul>
        <li><MdSearch size={26} /></li>
        <li><MdPersonOutline  size={26} /></li>
        <li><MdOutlineShoppingCart size={26} color="#9cd030"/></li>
      </ul>
    </nav>
  );
}
