import "./Item.css"
import {Link} from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {


    return (
        <article className="CardItem col-6 col-lg-3 p-4">

        <picture> 
            <img src= {img} alt ={name} className="CardItem-img" />
        </picture>

        <h2 className= "CardItem-Title" > {name} </h2>

        <p className= "CardItem-price"> {price} </p>
        <Link to={ `/item/${id}` } className="Principal-button CardItem-button"> Ver producto</Link>


     

        </article>

    )
}

export default Item

