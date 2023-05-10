import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenido'} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Bienvenido'}/>} />
          <Route path="/item/:productId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1> 404 not found </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
