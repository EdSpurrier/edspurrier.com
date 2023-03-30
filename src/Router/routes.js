import React from 'react';
import routePaths from './routePaths';


const NotFoundRoute = React.lazy(() => import('./NotFoundRoute'));

// PAGES
const Welcome = React.lazy(() => import('../Pages/Welcome'));
const Onboarding = React.lazy(() => import('../Pages/Onboarding'));
const NotFound = React.lazy(() => import('../Pages/NotFound'));
const Wiki = React.lazy(() => import('../Pages/Wiki'));
const ComingSoon = React.lazy(() => import('../Pages/ComingSoon'));

// APPS
const AppMarketplace = React.lazy(() => import('../Apps/Marketplace'));


export const paths = routePaths;


const routes = [
  {
    name: 'root',
    path: '/',
    component: <Welcome />,
    exact: true,
  },
  {
    name: 'onboarding',
    path: routePaths.onboarding,
    component: <Onboarding />,
    exact: true,
  },
  {
    name: 'welcome',
    path: routePaths.welcome,
    component: <Welcome />,
    exact: true,
  },
  {
    name: 'notFound',
    path: routePaths.notFound,
    component: <NotFound />,
    exact: true,
  },
  {
    name: 'wiki',
    path: routePaths.wiki,
    component: <Wiki />,
    exact: true,
  },
  {
    name: 'comingSoon',
    path: routePaths.comingSoon,
    component: <ComingSoon />,
    exact: true,
  }
];

export const routeNotFound = {
  name: 'route-not-found',
  path: '*',
  component: <NotFound />,
  exact: true,
};

export default routes;