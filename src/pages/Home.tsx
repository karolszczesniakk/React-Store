import Products from "../components/products/Products"
import NewProductScreen from "../components/products/MainProductScreen"

const Home: React.FC = () => {
  return (
    <>
      <NewProductScreen />
      <Products />
    </>
  );
}

export default Home;