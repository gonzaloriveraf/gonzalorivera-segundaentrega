import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



import "./Cart.css";
import CartEmpty from "../CartEmpty";

const Cart = () => {
  const { cart,  getTotal, deleteFromCart } = useContext(CartContext);

  return cart.length < 1 ? (
 
    <CartEmpty/> 


  ) : (
    <>
    <div className="container ItemsContainer">
      <div className=" d-flex flex-column row ItemsScrolled">
        {cart.map((e) => (
          <>
            <div className="CartItem ">
              <img className="CartItem-img " alt={e.item.name} src={e.item.img} />

              <div>
                <div className="CartItem-name "> {e.item.name} </div>

                <div className="CartItem-quantity">
         
                  Cantidad: {e.quantity}
                </div>

                <div className="CartItem-price"> ${e.item.price} </div>
              </div>

              <a href={'/'} className="CartItem-delete Link" onClick={() => deleteFromCart(e.item.id)}>  Eliminar  </a>
            </div>
          </>
        ))}{" "}
      </div>

    </div>

    
      <h3 className="CartTotal"> Total: ${getTotal()} </h3>
    </>
  );
};

export default Cart;
