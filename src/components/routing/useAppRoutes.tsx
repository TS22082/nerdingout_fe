import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingContainer from '../containers/LoadingContainer';
import AuthProtected from '../containers/AuthProtected';
import Layout from '../containers/Layout';

const useAppRoutes = () => {
  const AuthPage = lazy(() => import('../pages/AuthPage'));
  const VerifyAuthPage = lazy(() => import('../pages/VerifyAuthPage'));
  const ArticleViewPage = lazy(() => import('../pages/ArticleViewPage'));
  const LandingPage = lazy(() => import('../pages/LandingPage'));
  const NewPostPage = lazy(() => import('../pages/NewPostPage'));
  const DashboardPage = lazy(() => import('../pages/DashboardPage'));
  const EditArticlePage = lazy(() => import('../pages/EditArticlePage'));

  const routes = [
    {
      path: '/',
      element: (
        <Suspense fallback={<LoadingContainer />}>
          <Layout>
            <LandingPage />
          </Layout>
        </Suspense>
      ),
    },
    {
      path: '/:id',
      element: (
        <Suspense fallback={<LoadingContainer />}>
          <Layout>
            <LandingPage />
          </Layout>
        </Suspense>
      ),
    },
    {
      path: '/about',
      element: (
        <Suspense fallback={<LoadingContainer />}>
          <Layout>
            <h1>about</h1>
          </Layout>
        </Suspense>
      ),
    },
    {
      path: '/support',
      element: (
        <Suspense fallback={<LoadingContainer />}>
          <Layout>
            <h1>support</h1>
          </Layout>
        </Suspense>
      ),
    },
    {
      path: '/auth',
      element: (
        <Suspense fallback={<LoadingContainer />}>
          <Layout>
            <AuthPage />
          </Layout>
        </Suspense>
      ),
    },
    {
      path: '/auth/verify_gh',
      element: (
        <Suspense fallback={<LoadingContainer />}>
          <Layout>
            <VerifyAuthPage type="github" />
          </Layout>
        </Suspense>
      ),
    },
    {
      path: '/new',
      element: (
        <Suspense fallback={<LoadingContainer />}>
          <Layout>
            <AuthProtected>
              <NewPostPage />
            </AuthProtected>
          </Layout>
        </Suspense>
      ),
    },
    {
      path: '/edit/:articleId',
      element: (
        <Suspense fallback={<LoadingContainer />}>
          <Layout>
            <AuthProtected>
              <EditArticlePage />
            </AuthProtected>
          </Layout>
        </Suspense>
      ),
    },
    {
      path: '/article/:articleId',
      element: (
        <Suspense fallback={<LoadingContainer />}>
          <Layout>
            <ArticleViewPage />
          </Layout>
        </Suspense>
      ),
    },
    {
      path: '/dashboard',
      element: (
        <Suspense fallback={<LoadingContainer />}>
          <AuthProtected>
            <Layout>
              <DashboardPage />
            </Layout>
          </AuthProtected>
        </Suspense>
      ),
    },
    {
      path: '/profile',
      element: (
        <Suspense fallback={<LoadingContainer />}>
          <AuthProtected>
            <Layout>
              <h1>Profile Page</h1>
            </Layout>
          </AuthProtected>
        </Suspense>
      ),
    },
  ];

  return createBrowserRouter(routes);
};

export default useAppRoutes;
