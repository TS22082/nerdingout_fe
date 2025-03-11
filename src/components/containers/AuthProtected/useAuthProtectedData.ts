import { useNavigate } from 'react-router-dom';

const useAuthProtectedData = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('access_token');

  if (!authToken) return navigate('/');

  console.log('auth token ==>', authToken);
};

export default useAuthProtectedData;
