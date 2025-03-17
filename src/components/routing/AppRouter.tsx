import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../containers/Layout';
import LoadingContainer from '../containers/LoadingContainer';
import AuthProtected from '../containers/AuthProtected';

const AppRouter = () => {
  const AuthPage = lazy(() => import('../pages/AuthPage'));
  const VerifyAuthPage = lazy(() => import('../pages/VerifyAuthPage'));
  const ArticleViewPage = lazy(() => import('../pages/ArticleViewPage'));
  const LandingPage = lazy(() => import('../pages/LandingPage'));
  const NewPostPage = lazy(() => import('../pages/NewPostPage'));
  const DashboardPage = lazy(() => import('../pages/DashboardPage'));
  const EditArticlePage = lazy(() => import('../pages/EditArticlePage'));

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path=""
            element={
              <Suspense fallback={<LoadingContainer />}>
                <LandingPage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<LoadingContainer />}>
                <h1>about</h1>
              </Suspense>
            }
          />
          <Route
            path="support"
            element={
              <Suspense fallback={<LoadingContainer />}>
                <h1>support</h1>
              </Suspense>
            }
          />

          <Route path="auth">
            <Route
              path=""
              element={
                <Suspense fallback={<LoadingContainer />}>
                  <AuthPage />
                </Suspense>
              }
            />
            <Route
              path="verify_gh"
              element={
                <Suspense fallback={<LoadingContainer />}>
                  <VerifyAuthPage type="github" />
                </Suspense>
              }
            />
          </Route>

          <Route
            path="/new"
            element={
              <Suspense fallback={<LoadingContainer />}>
                <AuthProtected>
                  <NewPostPage />
                </AuthProtected>
              </Suspense>
            }
          />
          <Route
            path="/edit/:articleId"
            element={
              <Suspense fallback={<LoadingContainer />}>
                <AuthProtected>
                  <EditArticlePage />
                </AuthProtected>
              </Suspense>
            }
          />
          <Route
            path="/article/:articleId"
            element={
              <Suspense fallback={<LoadingContainer />}>
                <ArticleViewPage />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<LoadingContainer />}>
                <AuthProtected>
                  <DashboardPage />
                </AuthProtected>
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<LoadingContainer />}>
                <AuthProtected>
                  <h1>Profile Page</h1>
                </AuthProtected>
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
