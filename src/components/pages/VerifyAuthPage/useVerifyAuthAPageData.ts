import { useUserId } from '../../../hooks/state/useUserId.ts';
import { useNavigate } from 'react-router';

type VerifyAuthPageData = {
  type: 'github' | 'google' | 'linkedin';
};

const useVerifyAuthPageData = ({ type }: VerifyAuthPageData) => {
  const { setUserId } = useUserId();
  const navigate = useNavigate();

  (async () => {
    if (type === 'github') {
      const queryParam = new URLSearchParams(window.location.search);
      const code = queryParam.get('code');
      const baseUrl = import.meta.env.VITE_API_BASE_URL;

      if (!code || !baseUrl) {
        return;
      }

      const response = await fetch(`${baseUrl}/auth/gh?code=${code}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (!data?.user?.id || !data.token) return;

      setUserId(data.user.id);
      localStorage.setItem('access_token', data.token);
      return navigate('/');
    }

    if (type === 'google') {
      console.log('type ==> ', type);
      return;
    }

    if (type === 'linkedin') {
      console.log('type ==> ', type);
      return;
    }
  })();
};

export default useVerifyAuthPageData;
