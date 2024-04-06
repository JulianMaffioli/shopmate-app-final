import "./ProductCard.css";

//Importing Context
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartList } = useCart();
  const { id, name, price, image } = product;

  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const productOnCart = cartList.find((cartItem) => cartItem.id === id);
    productOnCart ? setInCart(true) : setInCart(false);
  }, [cartList, id]);

  return (
    <div className='productCard'>
      <img src={image} alt={name} />
      <p className='name'>{name}</p>
      <div className='action'>
        <p>${price}</p>
        {inCart ? (<button className='remove' onClick={() => removeFromCart(product)}>Remove</button>) :  (<button onClick={() => addToCart(product)}>Add To Cart</button>) }
        
      </div>
    </div>
  );
};
