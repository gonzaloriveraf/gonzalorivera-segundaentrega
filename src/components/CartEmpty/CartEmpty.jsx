import { Link } from "react-router-dom";
import iconCart from "../CartWidget/assets/cart.svg"
import "./CartEmpty.css"

import "./CartEmpty.css";

const CartEmpty = () => {


  return  (
    <div className="container text-center my-5 d-flex flex-column align-items-center CartEmpty">
        <img className="CartEmpty-img" src={iconCart} /> <span className="CartEmpty-number"> 0</span>
    <h4  className="text-center Title mt-4" >No hay nada por aquí</h4>
    </div>
  ) 
};

export default CartEmpty;
