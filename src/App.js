import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {createStore} from 'redux';


// intitial store
const initialStore = {
  count:78
};

//reducer
function reducer(state, action) {

  return state;
}

const store = createStore(reducer, initialStore);

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
