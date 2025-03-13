import { useParams } from 'react-router-dom';
import usePublishedArticle from '../../../hooks/api/usePublishedArticle.ts';
import { useEffect } from 'react';

const useArticleViewPageData = () => {
  const { articleId } = useParams();

  const { publishedArticle, publishedArticleLoading } = usePublishedArticle(
    articleId || ''
  );

  useEffect(() => {
    console.log('hello ==>', publishedArticle);
  }, [publishedArticle]);

  return {
    publishedArticle,
    publishedArticleLoading,
  };
};

export default useArticleViewPageData;
