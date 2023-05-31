import "./Checkout.css";
import { Link } from "react-router-dom";
import { createOrder } from "../../utils/createUpdateFirestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "../Cart";

const Checkout = () => {
  const { cart, clearCart, getTotal, deleteFromCart } = useContext(CartContext);

  const total = getTotal();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");

  const createOrderHandler = () => {
    createOrder(cart, total, firstName, email, adress).then((result) => {
      alert(`Se ha generado la orden ${result} `);
      console.log(result);
    });
  };

  return (
    <div className="container Checkout mt-5">
 
    

      <div className="row Items justify-content-between">
   

        <div className="col-12- col-md-5">
        <h2 className="Title mb-5">Termina tu compra </h2>
          <div className="CheckoutForm">
            <label>Nombre: </label>
            <input
            className="FormmInput"
              value={firstName}
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="CheckoutForm">
          <label>Correo electrónico: </label>
          <input
            value={email}
            name="adress"
            className="FormmInput"
            onChange={(e) => setEmail(e.target.value)}
          />
           </div>

           <div className="CheckoutForm"> 
           <label>Dirección: </label>
           <input
            value={adress}
            name="adress"
            onChange={(e) => setAdress(e.target.value)}
            className="FormmInput"
          />
           </div>
           <button className="Principal-button" onClick={createOrderHandler}>
            {" "}
            Comprar{" "}
          </button>
        </div>
        <div className="col-12 col-md-3 flex-columnn ">
          <div className="d-flex flex-row justify-content-between"><h4>Carro </h4>          <Link className="Link" to={"/cart"}>Editar el carro </Link></div>
 
          <Cart />

          <h4 className="CartContainerTotal my-3">Total: ${getTotal()} </h4>
        
        </div>
      </div>
    </div>
  );
};

export default Checkout;
