import styles from './Card.module.css'

const Card = (prop) => {
    return (
        <div className={ styles.card}>
            {prop.children}
        </div>
    )
}

export default Card