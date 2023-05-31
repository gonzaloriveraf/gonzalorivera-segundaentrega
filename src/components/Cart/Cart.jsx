import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import iconDelete from "./asset/trash-2.svg"

import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, getTotal, deleteFromCart } = useContext(CartContext);

  return cart.length < 1 ? (
    <h4>no hay nada por aqui</h4>
  ) : (
    <div className="container ItemsContainer">
      <div className=" d-flex flex-column row">
        {cart.map((e) => (
          <>
            <div className="CartItem ">
              <img className="CartItem-img " src={e.item.img} />

              <div>
                <div className="CartItem-name "> {e.item.name} </div>

                <div className="CartItem-quantity">
         
                  Cantidad: {e.quantity}
                </div>

                <div className="CartItem-price"> ${e.item.price} </div>
              </div>

              <a className="CartItem-delete Link" onClick={() => deleteFromCart(e.item.id)}>  Eliminar  </a>
            </div>
          </>
        ))}{" "}
      </div>

      <h3 className="CartTotal"> Total: ${getTotal()} </h3>
    </div>
  );
};

export default Cart;
