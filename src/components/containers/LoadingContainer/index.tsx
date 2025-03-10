import { Spinner } from 'react-bootstrap';

const LoadingContainer = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '60vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default LoadingContainer;
