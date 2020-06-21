import React from "react"


export const TransactionHistory= () => {
    return (
        
        <div>
            <h3>Transaction History</h3>
            <hr />
            <ul className='transaction-list'>
                <li>
                    Project income Deliverable 1
                        <span>$10,000</span>
                    <button className='delete-btn'>x</button>
                </li>
                <li>
                    Salary Payment
                        <span>$1000</span>
                    <button className='delete-btn'>x</button>
                </li>
            </ul>

        </div>
        
    )
}

