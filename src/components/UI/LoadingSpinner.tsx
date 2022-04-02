import classes from "./LoadingSpinner.module.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className={classes["loader-wrapper"]}>
      <div className={classes.loader}>
        <div className={classes["loader-inner"]}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
