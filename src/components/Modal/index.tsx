import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import "./Modalstyle.css";

export interface Productsprops {
  products: Products[];
}
type Products = {
  id: number;
  name: string;
  price: number;
  Img: string;
};

const index = ({ products }: Productsprops) => {
  const { removeFromCart, closeCart, getItemQuantity, isOpen, cartItem } =
    useShoppingCart();

  const [{ id }] = cartItem;
  console.log(id);

  return (
    <section className="modal-container">
      <div className="modal">
        {isOpen &&
          products?.map((item) => {
            if (item.id === id) {
              return (
                <div className="modal-content" key={item.id}>
                  <img src={item.Img} />
                  <div className="description">
                    <p>
                      <b>{item.name}</b>
                    </p>
                    <p>${item.price}</p>
                  </div>
                  <button
                    className="addToCartBttn"
                    onClick={() => {
                      closeCart(), removeFromCart(id);
                    }}>
                    Remove from Cart
                  </button>
                </div>
              );
            }
          })}
      </div>
    </section>
  );
};

export default index;
