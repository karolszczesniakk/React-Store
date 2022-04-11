import { CartState } from "../store/cart-slice";
import { CartItem } from "../types/CartItem";
import { UserData } from "../types/UserData";

interface NewOrderData {
  cartData: CartState,
  userData: UserData
}

export interface PastOrderData {
  id: string,
  cartItems: CartItem[],
  totalAmount: number,
  totalQuantity: number
  date: string;
}

export type SendOrderData = (orderData: NewOrderData) => any;
export type GetOrdersData = (userData: UserData) => any;
export type GetProducts = () => any;
export type GetSingleProduct = (id: number | string) => any;

const FAKESTOREAPI_DOMAIN = "https://fakestoreapi.com/products";
const FIREBASE_DATABASE =
  "https://react-store-6daea-default-rtdb.europe-west1.firebasedatabase.app/users";

export const getProducts: GetProducts = async () => {
  const response = await fetch(FAKESTOREAPI_DOMAIN);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products");
  }

  return data;
};

export const getSingleProduct: GetSingleProduct = async (id: number | string) => {
  const response = await fetch(`${FAKESTOREAPI_DOMAIN}/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products");
  }

  return data;
};



export const sendOrderData: SendOrderData = async (orderData: NewOrderData) =>{
  const { cartData, userData } = orderData;
  const { id, token } = userData;
  const dt = new Date();
  const date = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
  const transformedData = {
    date,
    ...cartData
  }
  const response = await fetch(
    `${FIREBASE_DATABASE}/${id}.json/?auth=${token}`,
    {
      method: "POST",
      body: JSON.stringify(transformedData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not send order data products");
  }

  return data;
}



export const getOrdersData = async (userData: UserData) => {
  const { id, token } = userData;

  const response = await fetch(
    `${FIREBASE_DATABASE}/${id}.json/?auth=${token}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const data = await response.json();
  const transformedData: PastOrderData[] = [];

  for (let key in data) {
    const tempObj = {
      id: key,
      ...data[key]
    }
    transformedData.push(tempObj);
  }

  if (!response.ok) {
    throw new Error(data.message || "Could not send order data products");
  }

  return transformedData;
};
