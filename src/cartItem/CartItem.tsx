/* Components Npm */
import  Button  from "@material-ui/core/Button";

/* Components */
import { CartItemType } from "@/shared/types";

/* Css */
import { Wrapper } from "./cartItem.styles";

type Props = {
  item: CartItemType;
  addToCart: (clicked: CartItemType) => void;
  removeFromCart: (id: number) => void;
};



const CartItem = ({item, addToCart, removeFromCart}: Props) => {
  return (
    <Wrapper>
        <div>
          <h3>{item.title}</h3>
          <div className="information">
            <p>Price: {item.price}€</p>
            <p>Total: {(item.amount * item.price).toFixed(2)}</p>
          </div>
          <div className="buttons">
            <Button 
              size="small"
              disableElevation
              variant="contained"
              onClick={()=> removeFromCart(item.id)}
            >
              -
            </Button>
            <p>{item.amount}</p>
            <Button 
              size="small"
              disableElevation
              variant="contained"
              onClick={()=> addToCart(item)}
            >
              +
            </Button>
          </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
  )
};

export default CartItem;