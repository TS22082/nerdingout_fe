import useUserArticles from '../../../hooks/api/useUserArticles.ts';
import { useState } from 'react';
import useCategories from '../../../hooks/api/useCategories.ts';

const useDashboardPageData = () => {
  const {
    userArticles,
    articlesLoading,
    handleChangeArticle,
    handleDeleteArticle,
  } = useUserArticles();

  const { categories, categoriesLoading } = useCategories();

  const categoryMapById = new Map();

  categories.forEach((category) => {
    categoryMapById.set(category.id, category);
  });

  const [modalState, setModalState] = useState({
    open: false,
    data: undefined,
  });
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

  const closeModal = () => {
    setModalState({
      data: undefined,
      open: false,
    });
  };

  const handleOpenModal = (article) => {
    setModalState({
      data: article,
      open: true,
    });
  };

  const handleDeleteSubmit = async () => {
    if (!modalState?.data?.id || !authToken) return;

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(
        `${baseUrl}/articles/${modalState.data.id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authToken,
          },
        }
      );
      await response.json();
      handleDeleteArticle(modalState.data.id);
    } catch (err) {
      console.error(err);
    }
    closeModal();
  };

  return {
    userArticles,
    articlesLoading,
    categoryMapById,
    modalState,
    handlePublishArticleToggle,
    closeModal,
    handleOpenModal,
    handleDeleteSubmit,
  };
};

export default useDashboardPageData;
