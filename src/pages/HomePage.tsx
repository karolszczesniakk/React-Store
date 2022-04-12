import Products from "../components/products/Products"
import MainBanner from "../components/products/main-banner/MainBanner";

const Home: React.FC = () => {
  return (
    <>
      <MainBanner />
      <Products />
    </>
  );
}

export default Home;