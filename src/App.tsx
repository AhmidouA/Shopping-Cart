import { useState } from 'react';
import { useQuery } from 'react-query';

/* Components Npm */
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge';
import Cart from '@/cart/Cart';

/* Components */
import { CartItemType } from '@/shared/types';
import { getProducts } from '@/shared/getProduct';
import Item from '@/item/Item';

/* Styles */
import { Wrapper, StyledButton } from './App.styles';

const App = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);


  /* Components */
  const { data, isLoading, error } = useQuery<Array<CartItemType>>(
    'product', 
    getProducts
    );
    console.log(data);

  /* methodes */
  const getTotalItems = (items: CartItemType[]) => {
    items.reduce((acc: number, item) => acc + item.amount,0)
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. is the item Already added in the cart ?
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if(isItemInCart) {
        return prev.map((item) => (
          item.id === clickedItem.id ? { ...item, amount: item.amount +1 } : item
        ));
      }
      // 1st time the item is add
      return [...prev, {...clickedItem, amount: 1}];
    })
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((acc, item) => {
        if(item.id === id) {
          if(item.amount === 1) return acc;
          return [...acc, {...item, amount: item.amount - 1}]
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[]) 
    ))
  };

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something Went Wrong ...</div>

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
          cartItems={cartItems} 
          addToCart={handleAddToCart} 
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={4} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data instanceof Array ? (
          data.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))
        ) : (
          <LinearProgress />
        )}
      </Grid>
    </Wrapper>
  );
};


export default App;
