import React from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from '../../css/dashboard/Header.module.css';
import { useNavigate } from 'react-router';

const Header = () => {

    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <h3 className={styles.head}>Dashboard</h3>
                <p className={styles.subHead}>Manage your articles, {user?.name} </p>
            </div>
            <button className={styles.newBtn} onClick={() => navigate("/dashboard/new")}>
                <i className="ri-add-line"></i> {" "}
                New article
            </button>
        </div>
    )
}

export default Header
