import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../components/containers/Layout';

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
              <Suspense fallback="Loading ...">
                <LandingPage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback="Loading ...">
                <h1>about</h1>
              </Suspense>
            }
          />
          <Route
            path="support"
            element={
              <Suspense fallback="Loading ...">
                <h1>support</h1>
              </Suspense>
            }
          />

          <Route path="auth">
            <Route
              path=""
              element={
                <Suspense fallback="Loading ...">
                  <AuthPage />
                </Suspense>
              }
            />
            <Route
              path="verify_gh"
              element={
                <Suspense fallback="Loading ...">
                  <VerifyAuthPage type="github" />
                </Suspense>
              }
            />
          </Route>

          <Route
            path="/new"
            element={
              <Suspense fallback="Loading ...">
                <NewPostPage />
              </Suspense>
            }
          />
          <Route
            path="/edit"
            element={
              <Suspense fallback="Loading ...">
                <EditPostPage />
              </Suspense>
            }
          />
          <Route
            path="/delete"
            element={
              <Suspense fallback="Loading ...">
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
