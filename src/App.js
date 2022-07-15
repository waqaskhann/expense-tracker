import Header from './components/Header/Header'

import Card from './components/UI/Card'
import TransactionsList from './components/Transactions/TransactionsList'
import AddTransaction from './components/Transactions/AddTransaction'

import {useState, useEffect, useCallback} from 'react'

function App() {
  const [transactions, setTransactions] = useState([])

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(()=>{
    var storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if(storedTransactions) {
      setTransactions(storedTransactions)
    }
  },[])
    
  const updateTransactions = (transaction) => {
    setTransactions(prevTransactions => {
      return [transaction, ...transactions]
    })
  }

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) => {
      return prevTransactions.filter(transaction => id != transaction.id)
    })
  }
  
  const calculateTotal = useCallback((data) => {
    let incomeTotal = 0 
    let expenseTotal = 0 
    
    data.forEach(item => {
      if(item.type === "income") {
        incomeTotal += +item.amount
      } else {
        expenseTotal += +item.amount
      }
    })
    
    setTotalIncome(incomeTotal)
    setTotalExpense(expenseTotal)
  }, [])
  
  useEffect(()=>{
    calculateTotal(transactions)
    localStorage.setItem('transactions', JSON.stringify(transactions))    
    console.log(2)
  },[calculateTotal, transactions])

  return (
    <section>
      <Card>
        <Header income={totalIncome} expense={totalExpense} />
        <TransactionsList transactions={transactions} onTransactionRemove={deleteTransaction}/>
        <AddTransaction onTransactionAdd={updateTransactions} />
      </Card>
    </section>
  );
}

export default App;
