import { useEffect, useState } from 'react';
import { ArticleType } from '../../types/types.ts';

const useUsersArticle = (articleId: string) => {
  const authToken = localStorage.getItem('access_token');
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const [usersArticle, setUsersArticle] = useState<ArticleType>({
    creatorId: '',
    id: '',
    title: '',
    description: '',
    coverPhoto: '',
    isPublished: false,
    body: [],
    updatedAt: '',
    categoryId: '',
  });

  const [usersArticleLoading, setUsersArticleLoading] =
    useState<boolean>(false);

  useEffect(() => {
    if (!articleId || !baseUrl || !authToken) return;

    (async () => {
      try {
        const response = await fetch(`${baseUrl}/articles/${articleId}`, {
          method: 'GET',
          headers: { Authorization: authToken },
        });
        const data = await response.json();

        console.log('what is this ==>', data);
        setUsersArticleLoading(false);
        setUsersArticle(data);
      } catch (err) {
        console.error('Failed ==>', err);
        setUsersArticleLoading(false);
      }
    })();
  }, [articleId, authToken, baseUrl]);

  return {
    usersArticle,
    usersArticleLoading,
  };
};

export default useUsersArticle;
