import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:itemId" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<h1 className="centered">Contact</h1>}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/*" element={<Navigate replace to="/not-found" />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
