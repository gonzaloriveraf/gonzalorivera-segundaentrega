import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCollection, getDocument } from "./utils/getFirestore";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home";


function App( ) {


  const [categoria, setCategoria] = useState();

  useEffect(() => {
    getCollection("categorias").then((result) => {
      setCategoria(result)
      result.reverse()
    });
  }, []);


/* const [categoria, setCategoria] = useState()

useEffect(()=> {
  const db = getFirestore();
  const categoriaCollection = collection(db, "categorias")
  getDocs(categoriaCollection).then(snapshots) => {
    if (snapshots.empty()) {
      setCategoria(
        snapshot.doc.map((doc) => ({id: doc.id, ...doc.data()}))
        );

    }

  } },[])
  
console.log(categoria) */


  return (
    <div className="App">

      <BrowserRouter>
        <header className="App-header">
         {categoria ?  <NavBar category= {categoria}  /> : null }  
        </header>
        <Routes>
          <Route path="/" element={<Home greeting={'Bienvenido'} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Bienvenido'}/>} />
          <Route path="/item/:productId" element={<ItemDetail    />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<Checkout />} />
      

          <Route path="*" element={<h1> 404 not found </h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
