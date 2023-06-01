/* import ItemCount from "../ItemCount"; */
import ItemList from "../ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from '../Spinner'
import { getCollection } from "../../utils/getFirestore";



const ItemListContainer = ({ greeting }) => {
  
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();





  const getListItem = () => {
    getCollection('items').then((result) => {
      console.log(result);
      const resultado = result.filter((element) => element.category === categoryId )
      setProducts(resultado);

    });
  };

  useEffect(() => {
    getListItem();

  }, [categoryId]);


 /* useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]); */

  return products.length  < 1  ? ( <Spinner /> ) : (
    <div className="container d-flex justify-content-center align-center row m-auto ">
    
      <div className="row ">

      <div className="col-8 mx-auto">
        <h1 className="h1 text-gray text-left my-5">{categoryId}</h1>
      </div>


        <ItemList products={products} />
        {/*   <ItemCount stock={6} initial={1} /> */}
      </div>
    </div>
  );
};

export default ItemListContainer;
