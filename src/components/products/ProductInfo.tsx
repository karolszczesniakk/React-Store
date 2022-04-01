import Card from "../UI/Card";
import classes from "./ProductInfo.module.css";

const ProductInfo: React.FC = () => {
  return (
    <Card className = {classes['product-info']}>
      <div>
        <img src="https://www.odzywianie.info.pl/img/stories/arts/_665x/czekolada-rodzaje-wartosci-odzywcze.jpg"></img>
      </div>
      <p>adsygfadsffasdyfhadsfsdafhasdyfbasdbfh</p>
    </Card>
  );
};

export default ProductInfo;
