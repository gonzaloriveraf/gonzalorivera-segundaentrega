import "./Navbar.css";
import brand from "../../img/logo_onwine.svg";
/* import MenuItems from '../MenuItems' */
import { Link } from "react-router-dom";
import MenuItems from "../MenuItems/MenuItems";


const NavBar = ({ category }) => {
  console.log(category);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white pt-4">
      <div className="Navbar container d-flex justify-content-space-between">
        <Link to={"/"}>  <div className="navbar-brand">
          <img alt="tienda onwine" src={brand} />
        </div>
        </Link>

        { /*category.map((cat) => {
          return (
            <div className="navbar-nav">
              <NavLink to={`/category/${cat.id}`}>{cat.categoria}</NavLink>
            </div>
          );
        }) */ }
        <MenuItems category= {category}  />

</div>
     
    </nav>
  );
};

export default NavBar;
