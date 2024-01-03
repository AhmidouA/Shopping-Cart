/* Components Npm */
import Button from '@material-ui/core/Button';
/* Components */
import { CartItemType } from '@/assets/shared/types';
/* Css */
import { Wrapper } from './Item.styles';


type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item = ({item, handleAddToCart}: Props) => { 
  return (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>{item.price} €</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
    </Wrapper>
  )
}

export default Item