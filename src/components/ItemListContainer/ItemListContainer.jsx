/* import ItemCount from "../ItemCount"; */
import ItemList from "../ItemList";
import { getProducts , getProductByCategory} from "../../asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId  } = useParams();

  

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="container d-flex justify-content-center align-center row m-auto ">
      <div className="col-12">
        <h1 className="h1 text-center text-gray m-auto">{greeting}</h1>
      </div>

      <div className="row ">
        <ItemList products={products} />
        {/*   <ItemCount stock={6} initial={1} /> */}
        
      </div>
    </div>
  );
};

export default ItemListContainer;
