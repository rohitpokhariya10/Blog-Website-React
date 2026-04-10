import React from 'react';
import styles from '../../css/ui/InputText.module.css';

const InputText = ({ label, placeHolder, error, add = "", ...rest }) => {

    let disPlayName = label.split("");
    disPlayName[0] = disPlayName[0].toUpperCase();
    disPlayName = disPlayName.join("");

    return (
        <div className={styles.box}>
            <label htmlFor={label} className={styles.label}> {disPlayName} </label>
            <textarea rows={5} placeholder={placeHolder} {...rest} className={styles.input} id={label} />
            <p className={styles.add}> {add} </p>
            <p className={styles.error}> {error} </p>
        </div>
    )

}

export default InputText
