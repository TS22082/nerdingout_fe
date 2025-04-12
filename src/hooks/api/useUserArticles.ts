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
      } catch (err) {
        console.error('useUsersArticles ==> ', err);
        setArticlesLoading(false);
      }
    })();
  }, [authToken]);

  const handleChangeArticle = (index: number, article: ArticleType) => {
    const arrCopy = [...userArticles];
    arrCopy[index] = article;
    setUserArticles(arrCopy);
  };

  const handleDeleteArticle = (id: string) => {
    const newArr = userArticles.filter((item) => item.id !== id);
    setUserArticles(newArr);
  };

  return {
    userArticles,
    articlesLoading,
    handleChangeArticle,
    handleDeleteArticle,
  };
};

export default useUserArticles;
