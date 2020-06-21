import React from "react"


export const AddTransaction= () => {
    return (
        <div>
            <h3>Add New Transcations</h3>
            <hr />

            <form className='transaction-form'>
                <label>
                    Description<br />
                </label>
                <input type='Text' placeholder='Detail of Transaction' />
        
                <br />

                <label>
                    Transaction Amount<br />
                </label>
                <input type='Number' placeholder='Dollar Value of Transaction'/>
                
                <br />

                <input type='Submit' value='Add Transactions' />
    
            </form>

        </div>
    )
}
