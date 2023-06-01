import { useContext } from "react";
import ItemCount from "../ItemCount";
import "./ItemDetail.css";
import Spinner from "../Spinner";
import { CartContext } from "../../context/CartContext";
import { useLocation } from "react-router-dom";

const ItemDetail = () => {
  const { addItem, displayCartContainer } = useContext(CartContext);
  const { state } = useLocation();
  const { id, name, img, category, price, stock , description  } = state;

  const handlerAddOrder = (count) => {
    const item = {
      img: img,
      id: id,
      name: name,
      price: price,
    };

    addItem(item, count);



    displayCartContainer();
  };

  return id === undefined ? (
    <Spinner />
  ) : (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-7 text-center ">
          <picture>
            <img src={img} alt={name} className="CardItem-img w-75" />
          </picture>
        </div>

        <div className="col-lg-5">
        <span className="CardItem-category">  {category} </span>
          <h2 className="ItemDetail-Title"> {name} </h2>
          <p className="CardItem-price Item-price"> {price} </p>
          <p className="CardItem-description"> { description } </p>
          <p className="CardItem-stock"> stock: {stock} </p>
          <div className="col-lg-9">
            <ItemCount
              maxCount={stock}
              initial={1}
              item={name}
              price={price}
              onChangeCount={handlerAddOrder}
            />
          </div>


        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
