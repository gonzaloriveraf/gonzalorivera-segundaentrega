import ItemCount from '../ItemCount'
import './ItemDetail.css'

const ItemDetail = ( {id, name, img, category, price, stock }) => {


    return (


    



<div className="container mt-5">

<div className="row">

<div className="col-lg-7"> 


<picture> 
            <img src= {img} alt ={name} className="CardItem-img" />
        </picture>



     

     

</div>

<div className="col-lg-5"> 


<h2 className= "ItemDetail-Title" > {name} </h2>
        <p className= "CardItem-price"> {price} </p>
        <p className= "CardItem-stock">  stock: {stock} </p>
        <p className= "CardItem-category">  Categoría: {category} </p>

<ItemCount stock={stock} initial={1} />

</div>

</div>

</div>



    )

}


export default ItemDetail