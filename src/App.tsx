import { useState } from 'react';
import { useQuery } from 'react-query';

/* Components Npm */
import Drawer from '@aterial-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Frid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge';

/* Components */
import { CartItemType } from './assets/shared/types';
import { getProducts } from './assets/shared/GetProduct';

/* Styles */
import { Wrapper } from './App.styles';

const App = () => {

  /* Components */
  const { data, isLoading, error } = useQuery<Array<CartItemType>>(
    'product', 
    getProducts
    );
    console.log(data);

  return (
    <div className='App'>
      Hello World
    </div>
  )
}

export default App
