import "./MenuItems.css";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

/* const categories = ['Tintos', 'Blancos', 'Espumantes', 'Maridajes'] */

const MenuItems = () => {
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
          <NavLink className="nav-link" to={`/category/tintos`}>
            {" "}
            Tintos{" "}
          </NavLink>
          <NavLink className="nav-link" to={`/category/blancos`}>
            {" "}
            Blancos{" "}
          </NavLink>
        </div>
      </div>

      <CartWidget />
    </>
  );
};

export default MenuItems;
