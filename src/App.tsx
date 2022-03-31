import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ItemDetails from './pages/ItemDetails';
import Shop from './pages/Shop';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:itemId" element={<ItemDetails data="czesc" />} />
        <Route
          path="/about"
          element={<h1 className="centered"> about </h1>}
        />
        <Route
          path="/contact"
          element={<h1 className="centered"> contact </h1>}
        />
        <Route path="/cart" element={<h1 className="centered"> cart </h1>} />
        <Route path="/*" element={<h1 className="centered"> not found </h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
