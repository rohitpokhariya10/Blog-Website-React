import React from 'react';
import styles from '../../css/home/Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <p className={styles.eyebrow}>Clean writing for developers and builders</p>
            <h1 className={styles.head}>Welcome to <span className={styles.highlight}>Inkwell</span></h1>
            <p className={styles.subHead}>Discover thoughtful articles on technology, programming, and software engineering from passionate writers.</p>
        </div>
    )
}

export default Header
