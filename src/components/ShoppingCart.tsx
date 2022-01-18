import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data';
import '../css/shoppingCart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


interface ItemCart {
  itemId: number,
  count: number
}

interface IShoppingCart {
  items:ItemCart[], 
  seen: boolean, 
  toggleCart: () => void, 
  addItemToCart: (i: number, count?: number) => void,
  removeItem: (i:number) => void,
}

const ShoppingCart:React.FC<IShoppingCart> = ({ items, seen, toggleCart, addItemToCart, removeItem }) => {
  interface CartItem {
    id: number,
    image: string, 
    quantity: number,
    name: string,
    price: number,
    discount: number
  }
  const itemsToDisplay:CartItem[] = []; 
  items.forEach(e => itemsToDisplay.push({
    id: e.itemId,
    image: products[e.itemId].images[0],
    quantity: e.count,
    name: products[e.itemId].name,
    price: products[e.itemId].price,
    discount: products[e.itemId].discount,
  }));

  const total = itemsToDisplay.reduce((a:number, cv:CartItem) => a + (cv.price - cv.price * cv.discount / 100) * cv.quantity, 0);

  return (
        <div className={`cart-container ${seen ? 'seen' : ''}`}>
            <div className='disabler' onClick={toggleCart}></div>
            <div className='shopping-cart'>
                <div className='cart-header'>
                    <button onClick={toggleCart}>
                        <FontAwesomeIcon icon={faAngleRight}/>
                    </button>
                    <h5>Shopping Cart</h5>
                </div>
                <Link to="#" className='button'>Checkout</Link>
                <div className='item-container'>
                    {itemsToDisplay.map((e)=>
                    <div className="single-item" key={e.id}>
                        <img src={require(`../img/products/${e.image}`)}/>
                        <div className='product-details'>
                            <h6>{e.name}</h6>
                            {e.discount ? <p className="price"><span className="old-price">£{e.price}</span> £{e.price - e.price * e.discount / 100}</p> : <p className="price">£{e.price}</p>} 
                            <span className='count-display'>
                                <button disabled={e.quantity === 1} onClick={()=>addItemToCart(e.id, -1)}>-</button>
                                <input name="itemCount" value={e.quantity} onChange={(el)=>addItemToCart(e.id, parseInt(el.target.value) - e.quantity)} type="number" min="1"/>
                                <button onClick={()=>addItemToCart(e.id)}>+</button>
                            </span>
                           
                        </div>  
                        <button onClick={()=>removeItem(e.id)}>X</button>
                    </div>)}
                </div>
                <p>Subtotal: </p>
                <p>£{total}</p>
            </div>
        </div>
  );
};

export default ShoppingCart;
