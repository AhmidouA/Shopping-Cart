import { useState } from 'react';
import { useQuery } from 'react-query';

/* Components Npm */
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge';

/* Components */
import { CartItemType } from '@/assets/shared/types';
import { getProducts } from '@/assets/shared/GetProduct';
import Item from '@/item/Item';

/* Styles */
import { Wrapper, StyledButton } from './App.styles';
import { colors } from '@material-ui/core';

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
  const getTotalItems = (items: CartItemType[]) => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something Went Wrong ...</div>

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        Cart goes here
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
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
}


export default App
