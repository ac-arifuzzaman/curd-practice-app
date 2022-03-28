import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProducts from "./components/AddProducts";
import Header from "./components/Header";
import Products from "./components/Products";
import Shop from "./components/Shop";
import UpdateProducts from "./components/UpdateProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/add" element={<AddProducts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/update/:id" element={<UpdateProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
