import useWindowWidth from "../../hooks/use-window-width";
import Content from "./Content";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import MainNavigationDropdown from "./MainNavigationDropdown";

const Layout: React.FC = (props) => {
  const screenWidth = useWindowWidth();
  
  return (
    <>
      {screenWidth > 980 ? <MainNavigation /> : <MainNavigationDropdown />}
      <Content>
        {props.children}
      </Content>
      <Footer />
    </>
  );
};

export default Layout;
