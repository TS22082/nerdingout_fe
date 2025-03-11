import { useEffect, useState } from 'react';

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${baseUrl}/articles`);
        const data = await response.json();

        setArticles(data);
        setArticlesLoading(false);
      } catch (e) {
        console.error(e);
        setArticlesLoading(false);
      }
    })();
  }, []);

  return { articles, articlesLoading };
};

export default useArticles;
