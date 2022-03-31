import Content from "./Content";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

const Layout: React.FC = (props) => {
  return (
    <>
      <MainNavigation />
      <Content>
        {props.children}
      </Content>
      <Footer />
    </>
  );
};

export default Layout;
