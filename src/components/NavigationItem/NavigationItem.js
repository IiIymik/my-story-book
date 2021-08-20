import styles from './NavigationItem.module.css'
export default function NavigationItem({ text, icon, reversed }) {
    return <li className={styles.item}>
        {icon} <p className={`${reversed ? styles.text : ''}`}>{text}</p>
    </li>
};
