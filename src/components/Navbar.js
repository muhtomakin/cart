import React from 'react';
import { useGlobalContext } from './Context'
import {ReactComponent as BoxIcon} from '../svgs/box.svg';

function Navbar() {

    const { amount } = useGlobalContext();

    return (
        <nav>
            <div className='nav-center'>
                <h3>useReducer</h3>
                <div className='nav-container'>
                    <BoxIcon />
                    <div className='amount-container'>
                        <p className='total-amount'>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
