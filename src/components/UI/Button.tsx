import classes from './Button.module.css'

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {children, onClick,type} = props
  return (
    <button type={type ? type : undefined} onClick={onClick} className={classes.button}>
      {children}
    </button>);
}

export default Button;