import classes from "./Content.module.css";

const Content: React.FC = (props) => {
  return (
    <div className={classes.content}>
      {props.children}
    </div>
  );
};

export default Content;
;
