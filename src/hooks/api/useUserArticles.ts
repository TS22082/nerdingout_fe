import { useEffect, useState } from 'react';
import { ArticleType } from '../../types/types.ts';

const useUserArticles = () => {
  const [userArticles, setUserArticles] = useState<ArticleType[]>([]);
  const [articlesLoading, setArticlesLoading] = useState(true);
  const authToken = localStorage.getItem('access_token');

  useEffect(() => {
    (async () => {
      if (!authToken) return;

      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${baseUrl}/articles`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authToken,
          },
        });
        const data = await response.json();

        setUserArticles(data);
        setArticlesLoading(false);
      } catch (e) {
        console.error(e);
        setArticlesLoading(false);
      }
    })();
  }, []);

  const handleChangeArticle = (index: number, article: ArticleType) => {
    const arrCopy = [...userArticles];
    arrCopy[index] = article;
    setUserArticles(arrCopy);
  };

  return { userArticles, articlesLoading, handleChangeArticle };
};

export default useUserArticles;
