import React from "react";
import UseCart from "../../hooks/UseCart";
import UseProducts from "../../hooks/UseProducts";
import { deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products] = UseProducts();
  const [cart, setCart] = UseCart(products);

  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };
  return (
    <div className="shop-container">
      <div>
        {cart.map((product) => (
          <ReviewItem
            handleRemove={handleRemove}
            key={product.key}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className="product-container">
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
