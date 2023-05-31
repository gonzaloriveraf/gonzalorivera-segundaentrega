import "./MenuItems.css";
import CartWidget from "../CartWidget";
import CartPreview from "../CartPreview";
import { NavLink, Link } from "react-router-dom";

/* const categories = ['Tintos', 'Blancos', 'Espumantes', 'Maridajes'] */

const MenuItems = ( {category }) => {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end "
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
       {/* <NavLink className="nav-link" to={`/category/tintos`}>
            {" "}
            Tintos{" "}
          </NavLink>
          <NavLink className="nav-link" to={`/category/blancos`}>
            {" "}
            Blancos{" "}
          </NavLink> */} 

          {category.map((cat) => {
          return (
            <div className="navbar-nav">
              <NavLink className="nav-link"  to={`/category/${cat.id}`}>{cat.categoria}</NavLink>
            </div>
          );
        })}

          
        </div>
      </div>

      <Link to={'/cart'} > <CartWidget /> </Link>
      <CartPreview  />
    </>
  );
};

export default MenuItems;
