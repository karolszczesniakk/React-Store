import Products from "../components/products/Products"
import NewProductScreen from "../components/products/main-product-banner/MainProductScreen"

const Home: React.FC = () => {
  return (
    <section>
      <NewProductScreen />
      <Products />
    </section>
  );
}

export default Home;