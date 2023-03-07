import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

type Props = {};

const Cart = (props: Props) => {
  const { cartItem } = useShoppingCart();
  console.log(cartItem);

  return <div>Cart</div>;
};

export default Cart;
