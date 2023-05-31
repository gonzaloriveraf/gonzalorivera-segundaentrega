/* import ItemCount from "../ItemCount"; */
import ItemList from "../ItemList";
import { getProducts, getProductByCategory } from "../../asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from '../Spinner'
import { getCollection , db} from "../../utils/getFirestore";



const ItemListContainer = ({ greeting }) => {
  
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();


/*   useEffect(()=> {
  setLoading(true)

  const collectionRef = categoryId 
  ? query(collection(db, 'products'), where ('category'), '==' , categoryId  )
  : collection(db, 'products')

  getDocs(collectionRef)
  .then(response => {
    const productsAdapted = response.docs.map(doc=> {
      const data = doc.data()
      return {id: doc.id, ...data }
    })
    setProducts(productsAdapted)
  }) 
  .catch (error => {
    console.log('error')
  })
  .finally(()=>{
    setLoading(false)
  } )
}) */

  // const [product, setProduct] = useState([]);



  const getListItem = () => {
    getCollection('items').then((result) => {
      console.log(result);
      const resultado = result.filter((element) => element.category === categoryId )
      setProducts(resultado);
      console.log(resultado);

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
      <div className="col-12">
        <h1 className="h1 text-gray m-auto">{categoryId}</h1>
      </div>

      <div className="row ">
        <ItemList products={products} />
        {/*   <ItemCount stock={6} initial={1} /> */}
      </div>
    </div>
  );
};

export default ItemListContainer;
