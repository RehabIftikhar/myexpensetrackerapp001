import React, {useContext} from "react"

import {Transaction} from './Transaction'


import {GlobalContext} from '../Context/GlobalState'


export const TransactionHistory= () => {
    const {transactions} = useContext(GlobalContext)
    console.log(transactions)
    return (
        
        <div>
            <h3>Transaction History</h3>
            <hr />
            <ul className='transaction-list'>
                {transactions.map(transaction=> (
                    <Transaction key= {transaction.id} transaction={transaction}/>
                
                ))}
                
            </ul>

        </div>
        
    )
}

