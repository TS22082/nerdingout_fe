import { ArticleType } from '../../types/types.ts';
import { useEffect, useState } from 'react';

const usePublishedArticle = (articleId: string) => {
  const [publishedArticle, setPublishedArticle] = useState<ArticleType>({
    creatorId: '',
    id: '',
    title: '',
    description: '',
    coverPhoto: '',
    isPublished: true,
    body: [],
    updatedAt: '',
  });

  const [publishedArticleLoading, setPublishedArticleLoading] =
    useState<boolean>(true);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (!articleId || !baseUrl) return;

    (async () => {
      try {
        const response = await fetch(
          `${baseUrl}/articles/published/${articleId}`
        );
        const data = await response.json();

        setPublishedArticleLoading(false);
        setPublishedArticle(data);
      } catch (err) {
        console.error('backend error ==>', err);
        setPublishedArticleLoading(false);
      }
    })();
  }, []);

  return {
    publishedArticle,
    publishedArticleLoading,
  };
};

export default usePublishedArticle;
