import React, {useState, useContext} from "react"
import { GlobalContext } from '../Context/GlobalState';


export const AddTransaction= () => {
    const [description, setDescription]= useState('')
    const [transactionAmount, setTransactionAmount]= useState(0)

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);
    }



    return (
        <div>
            <h3>Add New Transcations</h3>
            <hr />

            <form className='transaction-form' onSubmit={onSubmit}>
                <label>
                    Description<br />
                </label>
                <input type='Text' id= 'description' value= {description} onChange= {(e)=> setDescription(e.target.value)} placeholder='Detail of Transaction' required='required' />
        
                <br />

                <label>
                    Transaction Amount<br />
                </label>
                <input type='Number' id='transactionAmount' value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} placeholder='Dollar Value of Transaction' required='required'
                />
                
                <br />

                <input type='Submit' value='Add Transactions' />
    
            </form>

        </div>
    )
}
