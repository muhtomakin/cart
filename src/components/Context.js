import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './Data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'

const Context = React.createContext()

const initialState = {
    cart: cartItems,
    total: 0,
    amount: 0,
}

const ContextP = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }

    const remove = (id) => {
        dispatch({type: 'REMOVE', payload: id})
    }

    const increase = (id) => {
        dispatch({type: 'INCREASE', payload: id})
    }

    const decrease = (id) => {
        dispatch({type: 'DECREASE', payload: id})
    }

    const fetchData = async () => {
        const response = await fetch(url)
        const cart = await response.json()
        dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
    }

    const toggleAmount = (id, type) => {
        dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })
    }, [state.cart])

    return (
        <Context.Provider
          value={{
            ...state,
            clearCart,
            remove,
            increase,
            decrease,
            toggleAmount,
          }}
        >
          {children}
        </Context.Provider>
      )
}

export const useGlobalContext = () => {
    return useContext(Context)
}

export { Context, ContextP }