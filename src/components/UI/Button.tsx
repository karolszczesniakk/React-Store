import classes from './Button.module.css'

const Button: React.FC = ({children}) => {
  return (
    <button className={classes.button}>
      {children}
    </button>);
}

export default Button;