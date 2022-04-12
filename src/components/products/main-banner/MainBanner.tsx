import classes from "./MainBanner.module.css";

const MainProductScreen: React.FC = () => {
  const pictureLink =
    "https://media.discordapp.net/attachments/731871722684416011/960242829123260466/eqeqe.png?width=1440&height=611";
  return (
    <>
      <img
        className={classes["main-image"]}
        src={pictureLink}
        alt="main product"
      ></img>
      <hr />
    </>
  );
}

export default MainProductScreen;