import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpense} from './components/IncomeExpense'
import {TransactionHistory} from './components/TransactionHistory'
import {AddTransaction} from './components/AddTransaction'



import { GlobalProvider } from './Context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <div className='container'>
        
        <Header />


        <Balance />
        <IncomeExpense />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>



    
  );
}



export default App;
