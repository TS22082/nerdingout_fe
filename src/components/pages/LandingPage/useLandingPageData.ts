import usePublishedArticles from '../../../hooks/api/usePublishedArticles.ts';
import useCategories from '../../../hooks/api/useCategories.ts';
import { CategoryType } from '../../../types/types.ts';

const useLandingPageData = () => {
  const { publishedArticles, articlesLoading } = usePublishedArticles();
  const { categories, categoriesLoading } = useCategories();

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

  categories.forEach((category: CategoryType) => {
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
