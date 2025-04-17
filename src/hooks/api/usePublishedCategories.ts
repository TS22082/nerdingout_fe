import { useEffect, useState } from 'react';
import { CategoryType } from '../../types/types.ts';

const usePublishedCategories = () => {
  const [publishedCategories, setPublishedCategories] = useState<
    CategoryType[]
  >([]);
  const [publishedCategoriesLoading, setPublishedCategoriesLoading] =
    useState(false);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (!baseUrl) return;
    (async () => {
      try {
        const response = await fetch(`${baseUrl}/categories/published`);
        const data = await response.json();

        setPublishedCategories(data || []);
        setPublishedCategoriesLoading(false);
      } catch (e) {
        console.error(e);
        setPublishedCategoriesLoading(false);
      }
    })();
  }, [baseUrl]);

  return {
    publishedCategories,
    publishedCategoriesLoading,
  };
};

export default usePublishedCategories;
