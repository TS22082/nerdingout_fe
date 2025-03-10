import { useEffect, useState } from 'react';

const useArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${baseUrl}/articles`);
        const data = await response.json();

        setArticles(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return { articles };
};

export default useArticles;
