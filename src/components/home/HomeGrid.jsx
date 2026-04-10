import React from 'react';
import styles from '../../css/home/HomeGrid.module.css';
import Card from '../ui/Card';
import { useArticles } from '../../context/ArticleContext';

const HomeGrid = () => {
    const { articles } = useArticles();
    const publishedArticles = articles.filter((article) => article.type == "publish");

    if (publishedArticles.length === 0) {
        return (
            <div className={styles.emptyState}>
                <h3 className={styles.emptyTitle}>No published articles yet</h3>
                <p className={styles.emptyText}>Create and publish your first post to start filling this space with stories.</p>
            </div>
        );
    }

    return (
        <div className={styles.mainGrid}>
            {
                publishedArticles.map((elem) => {
                    return (
                        <Card article={elem} key={elem.id} />
                    )
                })
            }
        </div>
    )
}

export default HomeGrid
