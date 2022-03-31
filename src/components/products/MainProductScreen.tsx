import classes from "./MainProductScreen.module.css"

const MainProductScreen: React.FC = () => {
  const pictureLink =
    "https://images.unsplash.com/photo-1627931314190-eb289c743d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1954&q=80";
  return (
    <img
      className={classes['main-image']}
      src={pictureLink}> 
    </img>
  );
}

export default MainProductScreen;