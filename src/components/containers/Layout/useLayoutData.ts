import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useUserId } from '../../../hooks/state/useUserId.ts';
import useCategories from '../../../hooks/api/useCategories.ts';

const useLayoutData = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { categories, categoriesLoading } = useCategories();
  const { userId, setUserId } = useUserId();
  const authToken = localStorage.getItem('access_token');

  const layoutStyle = {
    minHeight: '100vh',
    backgroundColor: '#2B3035',
  };

  const location = useLocation();
  const currentBaseRoute = location.pathname.split('/')[1];

  useEffect(() => {
    (async () => {
      if (authToken && !userId && !isLoggedIn) {
        try {
          const baseUrl = import.meta.env.VITE_API_BASE_URL;
          const response = await fetch(`${baseUrl}/auth/verify`, {
            method: 'GET',
            headers: {
              Authorization: authToken,
            },
          });

          const data = await response.json();

          if (data.success) {
            setIsLoggedIn(true);
            setUserId(data.id);
          }
        } catch (err) {
          console.error('error making request ==>', err);
        }
      }
    })();

    if (userId && authToken && !isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [authToken, isLoggedIn, setUserId, userId]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId('');
    localStorage.removeItem('access_token');
  };

  return {
    isLoggedIn,
    layoutStyle,
    currentBaseRoute,
    categories,
    categoriesLoading,
    handleLogout,
  };
};

export default useLayoutData;
