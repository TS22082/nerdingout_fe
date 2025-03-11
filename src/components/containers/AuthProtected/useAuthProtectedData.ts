import { useNavigate } from 'react-router-dom';
import { useUserId } from '../../../hooks/state/useUserId.ts';
import { useEffect } from 'react';

const useAuthProtectedData = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('access_token');
  const { userId } = useUserId();

  useEffect(() => {
    if (!authToken || !userId) {
      navigate('/');
      return;
    }

    (async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${baseUrl}/auth/verify`, {
          method: 'GET',
          headers: {
            Authorization: authToken,
          },
        });

        const data = await response.json();
        if (!data.success) return navigate('/');
      } catch (err) {
        console.error('error making request ==>', err);
      }
    })();
  }, [userId]);
};

export default useAuthProtectedData;
