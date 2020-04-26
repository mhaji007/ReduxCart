import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {createStore} from 'redux';

import {DECREASE, INCREASE} from './actions';

import reducer from './reducer';

// intitial store
const initialStore = {
  count:78
};


const store = createStore(reducer, initialStore);

store.dispatch({type: INCREASE});
store.dispatch({type:INCREASE});

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
