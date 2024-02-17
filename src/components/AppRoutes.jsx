import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const Home = lazy(() => import('pages/Home/Home'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const Register = lazy(() => import('pages/Register/Register'));
const ContactsAddApp = lazy(() => import('./ContactsAddApp/ContactsAddApp'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route element={<PublicRoute />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="my-contacts" element={<ContactsAddApp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
