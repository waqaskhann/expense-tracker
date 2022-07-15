import styles from './Header.module.css'

const Header = (props) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Expense Tracker</h1>
            <div className={styles.balance}>
                <p className={styles["balance__text"]}>Your Balance</p>
                <p className={styles["balance__amount"]}>{(props.income - props.expense) < 0 ? '-' : ''}${Math.abs(props.income - props.expense)}</p>
            </div>
            <div className={styles["transactions-summary"]}>
                <div className={styles["transactions-summary__column"]}>
                    <p className={styles["transactions-summary__title"]}>Income</p>
                    <p className={`${styles["transactions-summary__amount"]} ${styles.income}`}>${props.income}</p>
                </div>
                <div className={styles["transactions-summary__separator"]}/>
                <div className={styles["transactions-summary__column"]}>
                    <p className={styles["transactions-summary__title"]}>Expense</p>
                    <p className={`${styles["transactions-summary__amount"]} ${styles.expense}`}>${props.expense}</p>
                </div>
            </div>
        </div>
    )
}

export default Header