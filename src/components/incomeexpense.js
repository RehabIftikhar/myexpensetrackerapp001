import React, {useContext} from "react"

import {GlobalContext} from '../Context/GlobalState'



export const IncomeExpense= () => {

    const {transactions} =useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);

    const income = transactionAmounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);

    const expense = Math.abs(transactionAmounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        ).toFixed(2);
    return (
        
        <div className='expense-container'>
            <h3>Income</h3>
            <h3 className= 'coloringtext'>{income}</h3>
            <h3>Expense </h3>
            <h3 className= 'coloringtext'>{expense}</h3>



        </div>

    )
}

