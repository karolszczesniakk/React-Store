
import { PastOrderData } from "../../api/api";
import { CartItem } from "../../types/CartItem";
import Card from "../UI/Card";

import classes from "./Orders.module.css";

const Orders: React.FC<{ orders: PastOrderData[] }> = ({ orders }) => {
  const reversedOrders = orders.reverse();
  
  return (
    <div className={classes.orders}>
      <h1 className="centered">Orders:</h1>
      {reversedOrders.map((order: PastOrderData) => {
        return (
          <Card>
            <h1>{order.date}</h1>
            {order.cartItems.map((cartItem: CartItem) => {
              return (
                <p key={cartItem.itemData.id}>
                  {cartItem.itemData.title} x {cartItem.quantity}
                </p>
              );
            })}
            <h2>Total: €{order.totalAmount}</h2>
          </Card>
        );
      })}
    </div>
  );
};

export default Orders;
