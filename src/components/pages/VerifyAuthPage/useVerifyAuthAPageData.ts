type VerifyAuthPageData = {
  type: 'linkedin' | 'github' | 'google';
};

const useVerifyAuthPageData = async ({ type }: VerifyAuthPageData) => {
  if (type === 'github') {
    const queryParam = new URLSearchParams(window.location.search);
    const code = queryParam.get('code');

    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch(`${baseUrl}/auth/gh?code=${code}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    console.log('data ==> ', data);
  }

  if (type === 'google') {
    console.log('type ==> ', type);
  }

  if (type === 'linkedin') {
    console.log('type ==> ', type);
  }
};

export default useVerifyAuthPageData;
