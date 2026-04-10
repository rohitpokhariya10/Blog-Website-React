import React from 'react';
import styles from '../../css/dashboard/Count.module.css';
import { useArticles } from '../../context/ArticleContext';
import { useAuth } from '../../context/AuthContext';

const Count = () => {
    const { articles } = useArticles();
    const { user } = useAuth();
    const userArticles = articles.filter((article) => article.email == user?.email);
    const published = userArticles.filter((article) => article.type == "publish").length;
    const draft = userArticles.filter((article) => article.type == "draft").length;

  return (
    <div className={styles.countHead}>
        <div className={styles.box}>
            <p className={styles.title}>Total Articles</p>
            <p className={`${styles.count} ${styles.normal}`}> {userArticles.length} </p>
        </div>
        <div className={styles.box}>
            <p className={styles.title}>Published</p>
            <p className={`${styles.count} ${styles.bright}`}> {published} </p>
        </div>
        <div className={styles.box}>
            <p className={styles.title}>Drafts</p>
            <p className={`${styles.count} ${styles.dim}`}> {draft} </p>
        </div>
    </div>
  )
}

export default Count
