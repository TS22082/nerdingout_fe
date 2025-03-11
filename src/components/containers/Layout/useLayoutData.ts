import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const useLayoutData = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authToken = localStorage.getItem('access_token');

  const layoutStyle = {
    minHeight: '100vh',
    height: '100vh',
  };

  const location = useLocation();
  const currentBaseRoute = location.pathname.split('/')[1];

  (async () => {
    if (authToken) {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${baseUrl}/auth/verify`, {
          method: 'GET',
          headers: {
            Authorization: authToken,
          },
        });

        const data = await response.json();
        if (data.success) setIsLoggedIn(true);
      } catch (err) {
        console.error('error making request ==>', err);
      }
    }
  })();

  return {
    isLoggedIn,
    layoutStyle,
    currentBaseRoute,
  };
};

export default useLayoutData;
