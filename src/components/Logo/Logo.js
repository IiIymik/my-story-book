import styles from './Logo.module.css'

export default function Logo({ imgUrl, alt = '' }) {
    return <img className={styles.logo} src={imgUrl} alt={alt}/>
};
