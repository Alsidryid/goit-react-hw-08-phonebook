import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Loader from 'components/Loader/Loader';
import style from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={style.box}>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
