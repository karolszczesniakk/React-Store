import classes from "./Footer.module.css"

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={classes.footer}>
      <p className="centered">Copyright @ {year}</p>
    </div>
  );
}

export default Footer;