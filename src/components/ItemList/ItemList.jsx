import Item from "../Item";


const ItemList = ({ products }) => {



  /* const products = [
      { id: 0, nombre: "Vino Carmenere", stock: "", precio: 123 },
      { id: 0, nombre: "Vino Cabernet", stock: "", precio: 123 },
      { id: 0, nombre: "Vino Merlot ", stock: "", precio: 123 },
      { id: 0, nombre: "Vino Rose", stock: "", precio: 123 },
    ];*/

  return (
    <div className="row d-flex  col-12 col-lg-8 m-auto">
       { products.map(product => <Item key={product.id} {...product} />)}
    </div>
  )
}

export default ItemList;
