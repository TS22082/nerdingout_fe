import { Button } from 'react-bootstrap';
import { FaGithubAlt } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import useAuthPageData from './useAuthPageData.ts';

const AuthPage = () => {
  const { loginWithGithub } = useAuthPageData();
  return (
    <div
      style={{
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ minWidth: '400px' }}>
        <Button
          style={{
            width: '100%',
            height: '80px',
          }}
          onClick={loginWithGithub}
        >
          <FaGithubAlt size={50} />
        </Button>
        <Button
          disabled
          className="mt-3"
          style={{
            width: '100%',
            height: '80px',
          }}
        >
          <FaGoogle size={50} />
        </Button>
        <Button
          disabled
          className="mt-3"
          style={{
            width: '100%',
            height: '80px',
          }}
        >
          <FaLinkedin size={50} />
        </Button>
      </div>
    </div>
  );
};

export default AuthPage;
