import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductPage';
import NotFound from './pages/NotFound';
import Shop from './pages/Shop';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:itemId" element={<ProductDetails />} />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<h1 className="centered">Contact</h1>}
        />
        <Route path="/cart" element={<h1 className="centered"><Cart /></h1>} />
        <Route path="/*" element={<Navigate replace to='/not-found' />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
