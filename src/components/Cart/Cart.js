import React from 'react';
import "../Cart/cart.css"
export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className='itemBox'>
              <div className='itemImg'>
                <img src={item?.images[0]} alt={item.title}></img>
              </div>
              <div className="">{item.title}</div>
            </div>
            <div className="handleBtn">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <div className="">
              {item.qty}
            </div>
              <button onClick={() => onAdd(item)} className="remove">
                +
              </button>
            </div>
            <div className='pric'>
            ${item.price.toFixed(2)}
            </div>
           
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className='total'>
              <h2>Total</h2>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            </div>
            
            <hr />
            <div className="row">
              <button className='checkout' onClick={() => alert('Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
