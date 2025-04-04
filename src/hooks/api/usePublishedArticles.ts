import { useEffect, useState } from 'react';
import { ArticleType } from '../../types/types.ts';
import { useLocation } from 'react-router';

const usePublishedArticles = () => {
  const [publishedArticles, setArticles] = useState<ArticleType[]>([]);
  const [articlesLoading, setArticlesLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const categoryId = location.pathname;
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    let requestStr = `${baseUrl}/articles/published`;

    if (categoryId.length > 1)
      requestStr += `?categoryId=${categoryId.slice(1)}`;

    (async () => {
      try {
        const response = await fetch(requestStr);
        const data = await response.json();

        setArticles(data);
        setArticlesLoading(false);
      } catch (e) {
        console.error(e);
        setArticlesLoading(false);
      }
    })();
  }, [location.pathname]);

  const handleChangeArticle = (index: number, article: ArticleType) => {
    const arrCopy = [...publishedArticles];
    arrCopy[index] = article;
    setArticles(arrCopy);
  };

  return { publishedArticles, articlesLoading, handleChangeArticle };
};

export default usePublishedArticles;
