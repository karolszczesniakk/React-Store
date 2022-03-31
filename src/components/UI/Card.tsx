import classes from "./Card.module.css";

type CardProps = {
  className?: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
