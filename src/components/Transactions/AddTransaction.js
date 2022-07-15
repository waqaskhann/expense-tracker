import { useState } from 'react';
import styles from './AddTransaction.module.css'

const AddTransaction = (props) => {
    const [isVisible, setIsVisible] = useState(false)

    const [transactionTitle, setTransactionTitle] = useState('')
    const [transactionAmount, setTransactionAmount] = useState('')
    const [transactionType, setTransactionType] = useState('')

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    const addExpense = (e) => {
        e.preventDefault()
        if(transactionTitle.trim().length === 0 || transactionAmount.trim().length === 0 || transactionType === '') {
            return
        }
        props.onTransactionAdd({
            title: transactionTitle,
            amount: transactionAmount,
            type: transactionType,
            id: Math.floor(Math.random() * 1000000)
        })
        setTransactionTitle('')
        setTransactionAmount('')
        setTransactionType('')
        setIsVisible(false)
    }

    const getExpenseType = (e) => {
        setTransactionType(e.target.value)
    }

    return (
        <>
            <a onClick={toggleVisibility} className={`${styles.button} ${!isVisible ? styles['button--add'] : styles['button--cancel']}`}>{!isVisible ? 'Add transaction' : 'Cancel'}</a>
            
            {isVisible && <form action="" className={styles['transaction-form']} onSubmit={addExpense}>
                <label htmlFor="description">Transaction Title</label>
                <input id="description" type="text" onChange={e => setTransactionTitle(e.target.value)} value={transactionTitle} />
                <label htmlFor="amount">Transaction Amount</label>
                <input id="amount" type="number" onChange={e => setTransactionAmount(e.target.value)} value={transactionAmount} />
                <p>Transaction Type:</p>
                <div onChange={getExpenseType}>
                    <div>
                        <input type="radio" id="income" name="transaction-type" value="income" /><label htmlFor="income">Income</label>
                    </div>
                    <div>
                        <input type="radio" id="expense" name="transaction-type" value="expense" /><label htmlFor="expense">Expense</label>
                    </div>
                </div>
                <button type="submit" className={`${styles.button} ${styles['button--add']}`}>Add Transaction</button>
            </form>}
        </>
    )
}

export default AddTransaction