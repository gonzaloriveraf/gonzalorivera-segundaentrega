import { useState } from "react";
//import { useCount } from "./hook/useCount";

const ItemCount = ({ maxCount, initial, onChangeCount }) => {
  // const { count, decrement, increment } = useCount(1, 0, maxCount);

  const handlerClick = () => {
    //  increment();
    onChangeCount(count);
  };

  const [count, setcount] = useState(initial);
  const [valid, setValid] = useState(true);

  const validation = () => {
    if (count <= 1) {
      setcount(1);
    } else {
      setValid(true);
    }
  };

  const onAdd = () => {
    if (maxCount < count) {
      setValid(false);
      alert("No existe suficiente stock para este producto :(");
    }

    handlerClick();
  };

  const increase = () => {
    if (count < maxCount) {
      setcount(count + 1);
    } else {
      setValid(false);
      alert("No existe suficiente stock para este producto :(");
    }
  };

  const onChangeTitle = (e) => {};

  return (
    <div className="container  ">
      <div className="d-flex justify-content-between">
        <button
          className="   Secondary-button w-25"
          onClick={() => {
            setcount(count - 1);
            validation();
            setValid(true);
          }}
        >
          -{" "}
        </button>

        <input
          className="text-center  FormmInput mx-5"
          type="text"
          value={count}
          onChange={onChangeTitle}
        />

        <button className="Secondary-button w-25" onClick={increase}>
          {" "}
          + {"  "}
        </button>

        {/* <button onClick={() => setcount(1)}>Reiniciar </button> */}
      </div>

      <div className="d-block">
        <button
          id="addToCart"
          className={valid ? "Principal-button my-4" : "btn disabled my-4 "}
          onClick={onAdd}
        >
          {" "}
          Agregar al Carrito{" "}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
