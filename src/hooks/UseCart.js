import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const UseCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          //set quantity
          const qunatity = savedCart[key];
          addedProduct.qunatity = qunatity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);
  return [cart, setCart];
};

export default UseCart;
