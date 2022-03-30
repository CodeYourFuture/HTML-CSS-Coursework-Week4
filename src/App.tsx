import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import './css/styles.scss';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Shop from './components/Shop';
import ShoppingCart from './components/ShoppingCart';
import Faq from './components/Faq';

const ScrollToTop:React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

interface ItemCart {
  itemId: number,
  count: number
}

const App: React.FC = () => {
  const [itemsInCart, setItemsInCart] = useState<Array<ItemCart>>(JSON.parse(localStorage.getItem('itemsInCart') || '[]'));
  const [itemCount, setItemCount] = useState<number>(itemsInCart.reduce((a:number, currrentItem: ItemCart)=> a + currrentItem.count, 0));
  const [shoppingCartSeen, setShoppingCartSeen] = useState<boolean>(false);

  const removeItem = (i:number):void => {
    const newItems = itemsInCart.filter(e => e.itemId !== i); 
    setItemsInCart(newItems);
  };

  const addItemToCart = (i:number, count?: number):void => {
    // function handles adding items to the cart
    const currentItems = itemsInCart;
    const currItem = itemsInCart.find(e => e.itemId === i);
    count = count ? count : 1;
    if (currItem) {
      currItem.count += count;
      currentItems[currentItems.findIndex(e => e.itemId === i)] = currItem; 
      setItemsInCart(currentItems); 
    } else {
      currentItems.push({ itemId: i, count });
      setItemsInCart(currentItems);
    }
    setItemCount(itemsInCart.reduce((a:number, currrentItem: ItemCart)=> a + currrentItem.count, 0));
    localStorage.setItem('itemsInCart', JSON.stringify(currentItems));
  };

  const toggleCart = ():void => {
    //toggles visibility of the shopping cart
    setShoppingCartSeen(!shoppingCartSeen);
  };

  return (
    <Router basename='/'>
      <ScrollToTop />
      <Header cartItemCount = {itemCount} toggleCart = {toggleCart}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/faq" element={<Faq />}/>
        <Route path="/shop" element={<Shop addItemToCart = {addItemToCart}/>}/>
        <Route path="/shop/:category" element={<Shop addItemToCart = {addItemToCart}/>}/>
      </Routes>      
      <Footer />
      <ShoppingCart items={itemsInCart} seen={shoppingCartSeen} toggleCart={toggleCart} addItemToCart={addItemToCart} removeItem={removeItem}/>
    </Router>
  );
};

export default App;
