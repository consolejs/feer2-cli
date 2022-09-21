import React, { lazy, Suspense, ReactNode } from 'react';
import Home from '@/pages/Home';
import { useRoutes } from 'react-router-dom';

const Page404 = lazy(() => import('@/pages/Page404'));

const lazyload = (children: ReactNode) => <Suspense fallback={null}>{children}</Suspense>;

const Router = () => useRoutes([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: lazyload(<Page404 />),
  },
]);

export default Router;
