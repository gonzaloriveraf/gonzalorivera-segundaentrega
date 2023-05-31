import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart, getQuantity } = useContext(CartContext);
  const cantidad = getQuantity();

  //const { AddProductCart } = useContext(CartContext);

  // let  quantity = 3;
  // let Quantity = () => quantity > 0 ? 'Cart Active' : 'Cart '

  return (
    <div
      className={cantidad > 0 ? "Cart Active" : "Cart"} 
    >
      <span className="Quantity"> { cantidad } </span>
    </div>
  );
};

export default CartWidget;
