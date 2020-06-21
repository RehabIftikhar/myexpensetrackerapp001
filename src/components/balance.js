import React, {useContext} from 'react'

import { GlobalContext } from '../Context/GlobalState';


export const Balance= ()=>{

    const { transactions } = useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return(
        <center>
            <div>

    <           h3>Your Balance <br /> ${balance}</h3>
            </div>
        </center>
    )
}

