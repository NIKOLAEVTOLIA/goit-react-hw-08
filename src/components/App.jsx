import { lazy, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import RestrictedRoute from '../components/RestrictedRoute/RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { Toaster } from 'react-hot-toast';
import Loader from '../components/Loader/Loader';
import './App.css';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Registration'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <Toaster />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
