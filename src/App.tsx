import { RouterProvider } from 'react-router-dom';
import useAppRoutes from './components/routing/useAppRoutes.tsx';

const App = () => {
  const routes = useAppRoutes();
  return <RouterProvider router={routes} />;
};

export default App;
