
import "./CartWidget.css"

const CartWidget = () => {

    let  quantity = 3;
    let Quantity = () => quantity > 0 ? 'Cart Active' : 'Cart ' 


return (

    <div className= {Quantity()} > 

<span className='Quantity'>  {quantity}  </span>


    </div>
)
}

export default CartWidget