import { createContext, useContext, useState } from "react";
import { load } from "../utils/localStorage";
import { withDefaultArticles } from "../utils/defaultArticles";

const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {

    const [articles, setArticles] = useState(() => withDefaultArticles(load("articles")));

    const items = {
        articles,
        setArticles
    }

    return (
        <ArticleContext.Provider value={items}>
            {children}
        </ArticleContext.Provider>
    )
};


export const useArticles = () => useContext(ArticleContext);
