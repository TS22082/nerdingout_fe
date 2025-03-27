import usePublishedArticles from '../../../hooks/api/usePublishedArticles.ts';
import useCategories from '../../../hooks/api/useCategories.ts';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const useLandingPageData = () => {
  const { publishedArticles, articlesLoading } = usePublishedArticles();
  const { categories, categoriesLoading } = useCategories();
  const location = useLocation();

  const wrapperStyles = {
    height: '600px',
    backgroundImage:
      'url("https://res.cloudinary.com/geek-centric/image/upload/v1741812246/nerdingout/cyber_overview_fxoimz.jpg")',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };

  const categoryMapById = new Map();

  categories.forEach((category) => {
    categoryMapById.set(category.id, category);
  });

  const pageLoading = articlesLoading || categoriesLoading;

  return {
    publishedArticles,
    pageLoading,
    wrapperStyles,
    categoryMapById,
  };
};

export default useLandingPageData;
