import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../components/containers/Layout';
import LoadingContainer from '../components/containers/LoadingContainer';

const AppRouter = () => {
  const AuthPage = lazy(() => import('../components/pages/AuthPage'));
  const VerifyAuthPage = lazy(
    () => import('../components/pages/VerifyAuthPage')
  );
  const LandingPage = lazy(() => import('../components/pages/LandingPage'));
  const NewPostPage = lazy(() => import('../components/pages/NewPostPage'));
  const EditPostPage = lazy(() => import('../components/pages/EditPostPage'));
  const DeletePostPage = lazy(
    () => import('../components/pages/DeletePostPage')
  );

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
                <NewPostPage />
              </Suspense>
            }
          />
          <Route
            path="/edit"
            element={
              <Suspense fallback={<LoadingContainer />}>
                <EditPostPage />
              </Suspense>
            }
          />
          <Route
            path="/delete"
            element={
              <Suspense fallback={<LoadingContainer />}>
                <DeletePostPage />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
