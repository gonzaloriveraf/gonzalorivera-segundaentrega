import Cart from "../Cart";
import "./CartPreview.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom'

const CartPreview = (  ) => {
  const { displayCartContainer } = useContext(CartContext);

  return (
    <div className="CartContainer d-none" >
      <div className="CartContent">
        <div className="col-12"><button  onClick={displayCartContainer} class="btn"> cerrar </button>
        </div>
     
          <Cart />


     
          <Link to={ `/checkout` } className="Principal-button " onClick={displayCartContainer}> Terminar Compra</Link>
          <Link to={ `/cart` } className="Link mx-auto  my-3 " onClick={displayCartContainer}> Ver Carro</Link>

      </div>
    </div>
  );
};

export default CartPreview;
