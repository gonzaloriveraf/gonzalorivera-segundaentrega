import { useState , useEffect } from 'react'; 
import {getProductById} from '../../asyncMock'; 
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [product , setProduct] = useState(null)
    const {productId} = useParams()

    useEffect (() => {
        getProductById(productId) 
            .then(response => {
                setProduct(response)

            })
            .catch (error =>  {
                console.error(error)
    })

},[productId])


    return (


    

<div className='ItemDetailContainer'> 

<ItemDetail {...product}> </ItemDetail>
 </div>

    )

}


export default ItemDetailContainer