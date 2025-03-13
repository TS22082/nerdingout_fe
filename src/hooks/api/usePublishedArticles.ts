import { useEffect, useState } from 'react';
import { ArticleType } from '../../types/types.ts';

const usePublishedArticles = () => {
  const [publishedArticles, setArticles] = useState<ArticleType[]>([]);
  const [articlesLoading, setArticlesLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${baseUrl}/articles/published`);
        const data = await response.json();

        setArticles(data);
        setArticlesLoading(false);
      } catch (e) {
        console.error(e);
        setArticlesLoading(false);
      }
    })();
  }, []);

  const handleChangeArticle = (index: number, article: ArticleType) => {
    const arrCopy = [...publishedArticles];
    arrCopy[index] = article;
    setArticles(arrCopy);
  };

  return { publishedArticles, articlesLoading, handleChangeArticle };
};

export default usePublishedArticles;
