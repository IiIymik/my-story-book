import React, {useState} from 'react'
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Toggle from '../Toggle/Toggle';
import styles from './AppBar.module.css';
export default function AppBar({ navItems, logoImg, minimized = true }) {
    const [isMinimized, setIsMinimized] = useState(minimized);
    const toggle = () => setIsMinimized((state) => !state);
    
    return (
        <div className={`${styles.appbar} ${isMinimized ? styles.minimized : ''}`}>
            <div className={styles.logoThumb}>
                <Logo imgUrl={logoImg} />
            </div>
            <div>
                <Toggle />
                <Navigation items={navItems}/>
            </div>
        </div>
    )
};