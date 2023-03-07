import { useShoppingCart } from "../context/ShoppingCartContext";
import "./ProductItemstyles.css";

interface ProductItemprops {
  productItem: ProductsItem;
}

type ProductsItem = {
  id: number;
  name: string;
  price: number;
  Img: string;
};

const ProductItem = ({ productItem }: ProductItemprops) => {
  const { addToCart, getItemQuantity, openCart } = useShoppingCart();
  const quantity = getItemQuantity(1);

  const { id, name, price, Img } = productItem;

  return (
    <div className="product">
      <img src={Img} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button
        className="addToCartBttn"
        onClick={() => {
          openCart(), addToCart(id);
        }}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductItem;
