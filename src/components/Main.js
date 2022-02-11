import React from 'react';
import Items from './Items';
import { useGlobalContext } from './Context'

const Main = () => {
    const { cart, total, clearCart } = useGlobalContext()
    if (cart.length === 0) {
        return (
          <section className='cart'>
            <header>
              <h2>your bag</h2>
              <h4 className='empty-cart'>is currently empty</h4>
            </header>
          </section>
        )
    }
    return (
        <section className='cart'>
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cart.map((item) => {
                    return <Items key={item.id} {...item} />
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button className='btn clear-btn' onClick={clearCart}>
                    clear cart
                </button>
            </footer>
        </section>
    );
}

export default Main;
