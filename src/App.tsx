import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import ShopPage from "./pages/ShopPage";

//OKOKOKOKOKOK http hook -> zgarnianie itemow z fakestoreapi -> LoadingSpinner OK
//dokonczyc cartSlice usuwanie itemow z carta, 03.04.2022 plan
//sortowanie i filtrowanie produktow na ShopPage 03.04.2022 plan
//stworzyc ContactPage, CheckoutPage, AboutPage, 04.04.2022 plan
//authSlice -> LoginModal -> google auth zeby blokowac checkout 04.04.2022 plan
//Dropdown menu 



function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ShopPage />} />
        <Route path="/products/:itemId" element={<ProductPage />} />
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
