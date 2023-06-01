import Cart from "../Cart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../utils/createUpdateFirestore";
import { Link } from "react-router-dom";
import "./CartContainer.css";
import CartEmpty from "../CartEmpty";
import iconDelete from "../Cart/asset/trash-2.svg"
const CartContainer = () => {
  const { cart, clearCart, getTotal, deleteFromCart } = useContext(CartContext);

  console.log(cart);
  const createOrderHandler = () => {
    createOrder(cart).then((result) => {
      alert(`Se ha generado la orden ${result} `);
      console.log(result);
    });
  };

  return cart.length < 1 ? (

<CartEmpty /> 

  ) : (
    <div className="container CartContianer  ItemsContainer mt-5">
      <h2 className="Title"> Carro </h2>  



      <div className="row Items justify-content-between">
        <div className="col-12- col-md-6 d-flex flex-column">
          <Cart />

        </div>
        
        <div className="col-md-3 ">
          <h5 > Resumen:</h5>
            <h4 className="CartContainerTotal my-4 ">Total: ${getTotal()} </h4>

            <Link to={"/checkout"}>
              <button className="Principal-button"> Ir a Comprar</button>{" "}
            </Link>

<div className="my-4 text-center ">

            <a className="Link" onClick={clearCart} > <img src={iconDelete}/>  Vaciar el carro</a></div>
      
          </div>
      </div>
    </div>
  );
};

export default CartContainer;
