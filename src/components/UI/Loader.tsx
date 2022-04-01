import classes from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={classes['loader-wrapper']}>
      <h1>Loading...</h1>
      <div className={classes.loader}>
        <div className={classes['loader-inner'] } ></div>
      </div>
    </div>
  )
}

export default Loader;