import React from "react";
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/Menu/Menu";
import NameBrand from './components/NameBrand/NameBrand';
import CartContextProvider from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from "./pages/Cart/Cart";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'

function App() {
  return (
    <HashRouter>
      <CartContextProvider>
        <Menu />
        <NameBrand />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />
          } />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </CartContextProvider>
    </HashRouter>
  );
}

      export default App;