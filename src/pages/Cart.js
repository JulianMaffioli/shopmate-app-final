import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useCart } from "../context/CartContext"; //importing useCart from the context directly 

export const Cart = () => {

  const {total, cartList} = useCart();//Using useCart 

  useTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length} / Total: ${total}</h1>
        { cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
