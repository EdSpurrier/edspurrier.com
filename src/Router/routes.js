import React from 'react';
import routePaths from './routePaths';
// Import routes from remote Apps here....


// LOCAL PAGES
const Welcome = React.lazy(() => import('Pages/Welcome'));
const NotFound = React.lazy(() => import('Pages/NotFound'));
const Wiki = React.lazy(() => import('Pages/Wiki'));
const ComingSoon = React.lazy(() => import('Pages/ComingSoon'));

// LOCAL APPS

// Export routepaths for remote Apps
export const paths = routePaths;


const localRoutes = [
  {
    name: 'root',
    path: '/',
    component: <Welcome />,
    exact: true,
  },
  {
    name: 'welcome',
    path: routePaths.welcome,
    component: <Welcome />,
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



const remoteRoutes = [
  /* Add remote routes here*/
];


export const routeNotFound = {
  name: 'route-not-found',
  path: '*',
  component: <NotFound />,
  exact: true,
};

export default [...localRoutes, ...remoteRoutes, routeNotFound ];