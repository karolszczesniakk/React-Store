import classes from './Button.module.css'

interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {children, onClick} = props
  return (
    <button onClick={onClick} className={classes.button}>
      {children}
    </button>);
}

export default Button;