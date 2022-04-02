import { Item } from "./Item";

export interface CartItem {
  itemDetails: Item;
  quantity: number;
  totalPrice: number;
};