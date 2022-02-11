import React from 'react';
import {ReactComponent as AddIcon} from '../svgs/add.svg'
import {ReactComponent as RemoveIcon} from '../svgs/remove.svg'
import { useGlobalContext } from './Context'

const Items = ({ id, img, title, price, amount }) => {
    const { remove, increase, decrease, toggleAmount } = useGlobalContext()
    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>          
                <button className='remove-btn' onClick={() => remove(id)}>remove</button>     
            </div>
            <div>
                <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}><AddIcon /></button>
                <p className='amount'>{amount}</p>
                <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}><RemoveIcon /></button>
            </div>
        </article>
    );
}

export default Items;
