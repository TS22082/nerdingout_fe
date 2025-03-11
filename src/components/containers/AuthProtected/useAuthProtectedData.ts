import { useNavigate } from 'react-router-dom';

const useAuthProtectedData = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('access_token');

  if (!authToken) return navigate('/');

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
};

export default useAuthProtectedData;
