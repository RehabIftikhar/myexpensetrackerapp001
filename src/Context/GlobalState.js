import React, { createContext, useReducer} from 'react'
//import Reducer
import AppReducer from './AppReducer'


//initial state

const initialState= {
    transactions: [
        {id: 1, description: 'grossary' , transactionAmount: -10000},
        {id: 2, description: 'shopping', transactionAmount: -5000},
        {id: 3, description: 'salary', transactionAmount: 100000},
        {id: 4, description: 'deposit',  transactionAmount: 30000}

    ]
}

//global context

export const GlobalContext= createContext (initialState)

//provider for global context

export const GlobalProvider= ({Children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
            
        }>{Children}</GlobalContext.Provider>
    )
}
