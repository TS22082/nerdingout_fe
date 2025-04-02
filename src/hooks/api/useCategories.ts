import { useEffect, useState } from 'react';
import { CategoryType } from '../../types/types.ts';

const useCategories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (!baseUrl) return;
    (async () => {
      try {
        const response = await fetch(`${baseUrl}/categories`);
        const data = await response.json();

        setCategories(data);
        setCategoriesLoading(false);
      } catch (e) {
        console.error(e);
        setCategoriesLoading(false);
      }
    })();
  }, [baseUrl]);

  return {
    categories,
    categoriesLoading,
  };
};

export default useCategories;
