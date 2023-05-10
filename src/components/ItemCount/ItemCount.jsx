import { useState } from "react";

const ItemCount = (props) => {
  const [count, setCount] = useState(props.initial);

  const validation = () => {
    if (count <= 1) {
      setCount(1);
    }
  };

  const onAdd = () => {
    if (props.stock < count) {
      alert("No existe suficiente stock para este producto :(");
    } else {
      alert("Agregado al carrito :) ");
    }
  };

  const increase = () => {
    if (count < props.stock) {
      setCount(count + 1);
    } else {
      alert("No existe suficiente stock para este producto :(");
    }
  };

  const onChangeTitle = (e) => {
    setCount(e.target.value);
  };

  return (
    <div className="container  ">
      <div className="d-flex justify-content-between">
        <button className="   Secondary-button w-25"
          onClick={() => {
            setCount(count - 1);
            validation();
          }}
        >
          - {" "}
        </button>

        <input
          className="text-center  Input-field"
          type="number"
          value={count}
          onChange={onChangeTitle}
        />

        <button className="Secondary-button w-25" onClick={increase}>  + {"  "}</button>

        {/* <button onClick={() => setCount(1)}>Reiniciar </button> */}
      </div>
      <div class="d-block">
        <button className="Principal-button my-4 " onClick={onAdd}> Agregar al Carrito </button>
      </div>
    </div>
  );
};

export default ItemCount;
