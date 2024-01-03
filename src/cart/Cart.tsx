/* Components */
import CartItem from "@/cartItem/CartItem";
import { CartItemType } from "@/shared/types";

/* Css */
import { Wrapper } from "./Cart.styles";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id:number) => void;
};

const Cart = ({cartItems, addToCart, removeFromCart}: Props) => {

  const totalPrice = (items: CartItemType[]): number => {
    return items.reduce((acc: number, item: CartItemType) => acc + item.amount * item.price, 0);
  };

  return (
    <Wrapper>
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? <p>No Items in cart...</p> : null}
        {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />

        ))}
        <h2>Total: {totalPrice(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;