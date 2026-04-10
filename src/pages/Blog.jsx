import React from 'react';
import Markdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router';
import { useArticles } from '../context/ArticleContext';
import styles from '../css/home/Blog.module.css';

const Blog = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { articles } = useArticles();
    const article = articles.find((elem) => elem.id == id);
    const wordCount = (article?.content || "").trim().split(/\s+/).filter(Boolean).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    if (!article) {
        return (
            <section className={`page ${styles.page}`}>
                <div className={styles.notFound}>
                    <h2>Article not found</h2>
                    <button className={styles.backBtn} onClick={() => navigate("/")}>Back to Home</button>
                </div>
            </section>
        )
    }

    return (
        <section className={styles.wrap}>
            <main className={`page ${styles.page}`}>
                <p className={styles.back} onClick={() => navigate("/")}>
                    <i className="ri-arrow-left-line"></i> Back to Articles
                </p>

                <article className={styles.article}>
                    <header className={styles.header}>
                        <div className={styles.tags}>
                            {(article.tags || []).map((tag, idx) => (
                                <span key={idx} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                        <h1 className={styles.title}>{article.title}</h1>
                        <p className={styles.desc}>{article.desc}</p>
                        <div className={styles.meta}>
                            <span className={styles.metaItem}><i className="ri-user-line"></i> {article.author}</span>
                            <span className={styles.metaItem}><i className="ri-calendar-line"></i> {article.date}</span>
                            <span className={styles.metaItem}><i className="ri-time-line"></i> {readTime} min read</span>
                        </div>
                    </header>

                    <div className={styles.content}>
                        <Markdown>{article.content}</Markdown>
                    </div>
                </article>
            </main>
        </section>
    )
}

export default Blog
