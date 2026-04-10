import React from 'react';
import styles from '../../css/dashboard/Articles.module.css';
import { useNavigate } from 'react-router';
import { useArticles } from "../../context/ArticleContext"
import { useAuth } from '../../context/AuthContext';
import BlogDisplay from './BlogDisplay';

const Articles = () => {

    const navigate = useNavigate();
    const { articles } = useArticles();
    const { user } = useAuth();
    const userArticles = articles.filter((article) => article.email == user?.email);

    return (
        <div className={styles.mainDiv}>
            <h3 className={styles.head}>Your Articles</h3>


            {
                userArticles.length <= 0 ? (
                    <div className={styles.noArticles}>
                        <i className={`ri-file-text-line ${styles.icon}`}></i>
                        <h4 className={styles.headTxt}>No articles yet</h4>
                        <p className={styles.subTxt}>
                            Start writing your first article
                        </p>
                        <button className={styles.button} onClick={() => navigate("/dashboard/new")}><i className="ri-add-line"></i> Create Article</button>
                    </div>
                ) : (
                    userArticles.map((article) => (
                        <BlogDisplay article={article} key={article.id} />
                    ))
                )
            }

        </div>
    )
}

export default Articles
