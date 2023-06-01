import "./Success.css"
import { Link } from "react-router-dom";
import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "../Cart";
import { useLocation } from "react-router-dom";

const Success = () => {

    const location = useLocation()
    const { nombre , direccion , mail} = location.state
    const { clearCart  } = useContext(CartContext);

    return (
<> 




<div className="container Success">


<div className="col-lg-6 mx-auto"> 

<h1 className="h1 text-gray text-center text-left my-5"> Gracias {nombre}! </h1>

<p className="text-center"> Recibimos tu pedido, enviamos un correo a: {mail} con los detalles de tu compra y  estará en tu dirección cuanto antes ¡Salud! </p>    


<h5 className="mt-5 mb-4">Dirección de envío: </h5>
<p>Enviar a: <strong> {direccion}</strong> </p>
<p>Entregar a: <strong>{nombre}  </strong> </p>

<h5 className="mt-4">Resumen de Tu pedido : </h5>

<Cart/>
<div className="text-center">
<Link to={'/'}><button className="Principal-button my-5 mx-auto w-50" onClick={clearCart}> Volver al Inicio </button> </Link>
</div>

</div>

</div>


</>


    )
}

export default Success

