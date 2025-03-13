import useUserArticles from '../../../hooks/api/useUserArticles.ts';

const useDashboardPageData = () => {
  const { userArticles, articlesLoading, handleChangeArticle } =
    useUserArticles();
  const authToken = localStorage.getItem('access_token');

  const handlePublishArticleToggle = async (index: number) => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const article = { ...userArticles[index] };

    article.isPublished = !article.isPublished;

    if (!authToken) return;

    try {
      const response = await fetch(`${baseUrl}/articles/${article.id}`, {
        method: 'PATCH',
        body: JSON.stringify(article),
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
      });

      const { data } = await response.json();
      handleChangeArticle(index, data);
    } catch (e) {
      console.error('error ==>', e);
    }
  };

  return { userArticles, articlesLoading, handlePublishArticleToggle };
};

export default useDashboardPageData;
