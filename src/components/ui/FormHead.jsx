import React from 'react';
import styles from '../../css/ui/FormHead.module.css';

const FormHead = ({ head, subHead }) => {
    return (
        <div className={styles.cont}>
            <div className={styles.logo}>
                <i className={`ri-edit-line ${styles.logoImg}`}></i>
            </div>
            <h3 className={styles.head}>
                {head}
            </h3>
            <p className={styles.subHead}>
                {subHead}
            </p>
        </div>
    )
}

export default FormHead
