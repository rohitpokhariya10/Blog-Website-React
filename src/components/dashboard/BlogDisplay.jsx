import React, { useState } from 'react';
import styles from '../../css/dashboard/BlogDisplay.module.css';
import { useNavigate } from 'react-router';
import { useArticles } from '../../context/ArticleContext';
import { save } from '../../utils/localStorage';
import { DEFAULT_ARTICLE_IDS } from '../../utils/defaultArticles';

const BlogDisplay = ({ article }) => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { articles, setArticles } = useArticles();

    const todayDate = () => {
        const today = new Date();
        const day = today.getDate();
        const year = today.getFullYear();
        const month = today.toLocaleString("en-us", { month: "long" });
        const sufix = () => {
            if (day > 3 && day < 21) return "th";
            switch (day % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        };

        return `${day}${sufix()}, ${month}, ${year}`;
    };

    const togglePublish = () => {
        if (DEFAULT_ARTICLE_IDS.includes(article.id)) return;

        const updatedArray = articles.map((a) => (
            a.id == article.id
                ? { ...a, type: a.type == "publish" ? "draft" : "publish", date: todayDate() }
                : a
        ));
        setArticles(updatedArray);
        save("articles", updatedArray);
        setOpen(false);
    };

    const deleteArticle = () => {
        if (DEFAULT_ARTICLE_IDS.includes(article.id)) return;

        const updatedArray = articles.filter((a) => a.id != article.id);
        setArticles(updatedArray);
        save("articles", updatedArray);
        setOpen(false);
    };

    return (
        <div className={styles.box}>
            <div className={styles.left}>
                <div className={styles.head}>
                    <span className={styles.title}> {article.title} </span>
                    <span className={styles.type}> {article.type} </span>
                </div>
                <p className={styles.desc} > {article.desc} </p>
                <p className={styles.date}> Last updated: {article.date} </p>
            </div>
            <div className={styles.right}>
                <div className={styles.iconBox} onClick={() => setOpen(prev => !prev)}>
                    <i className={`ri-more-2-line ${styles.icon}`}></i>
                </div>
                <div className={`${styles.float} ${open ? "" : styles.close}`}>
                    {article.type == "publish" && (
                        <button className={styles.bar} onClick={() => navigate(`/blog/${article.id}`)}><i className="ri-eye-line"></i> View</button>
                    )}
                    <button className={styles.bar} onClick={togglePublish}>
                        <i className={article.type == "publish" ? "ri-eye-off-line" : "ri-eye-line"}></i>
                        {article.type == "publish" ? "Unpublish" : "Publish"}
                    </button>
                    <button className={styles.bar} onClick={() => navigate(`/dashboard/edit/${article.id}`)}><i className="ri-pencil-line"></i> Edit</button>
                    <button className={`${styles.bar} ${styles.delete}`} onClick={deleteArticle}><i className="ri-delete-bin-line"></i> Delete</button>
                </div>
            </div>
        </div>
    )
}

export default BlogDisplay
