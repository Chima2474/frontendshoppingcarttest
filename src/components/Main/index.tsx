import React, { useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import ProductItem from "../../pages/ProductItem";
import Modal from "../Modal";
import "./Mainstyles.css";

export interface Productsprops {
  products: Products[];
}
type Products = {
  id: number;
  name: string;
  price: number;
  Img: string;
};
// type Search = {
//   name: string;
// };
const index = ({ products }: Productsprops) => {
  const [search, setSearch] = useState("");
  const [productItems, setProductItem] = useState(products);
  const { isOpen } = useShoppingCart();

  return (
    <div className="main">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {isOpen && <Modal products={products} />}
      <div className="products">
        {productItems.map((productItem) => {
          if (productItem.name.toLowerCase().includes(search)) {
            return (
              <ProductItem productItem={productItem} key={productItem.id} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default index;
