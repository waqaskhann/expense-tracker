import styles from './TransactionsList.module.css'


const TransactionsList = (props) => {
const removeTransaction = (e) => {
    props.onTransactionRemove(e.target.id)
}

    return (
        <div className={styles['transactions']}>
            <div className={styles['transactions__header']}>
                <h3 className={styles['transactions__title']}>Transaction History</h3>
                <p className={styles['transactions__label']}>in US$</p>
            </div>
            <ul className={styles['transactions-list']}>
                {props.transactions.map(transaction => {
                    return (
                        <li className={`${styles.transaction} ${transaction.type === 'income' ? styles.income : styles.expense}`} key={transaction.id}>
                            <p className={styles['transaction__title']}>{transaction.title}</p>
                            <p className={styles['transaction__amount']}>{transaction.amount}</p>
                            <div className={styles['transaction__delete']} onClick={removeTransaction} id={transaction.id}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="white">
                                    <path d="M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z"/>
                                    <path d="M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z"/>
                                </svg>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TransactionsList