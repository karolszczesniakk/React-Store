import classes from "./Card.module.css";

type CardProps = {
  className?: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div
      className={`${classes.card} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
