import { Item } from "./Item";

export interface CartItem {
  itemData: Item;
  quantity: number;
  totalPrice: number;
};