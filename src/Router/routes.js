import React from 'react';
// Import routes from remote Apps here....


//  LOCAL PAGES
const Welcome     = React.lazy(() => import('Pages/Welcome'));
const NotFound    = React.lazy(() => import('Pages/NotFound'));
const Creations     = React.lazy(() => import('Pages/Creations'));
const Experience    = React.lazy(() => import('Pages/Experience'));
const Skills        = React.lazy(() => import('Pages/Skills'));
const Testamonials  = React.lazy(() => import('Pages/Testamonials'));
const ComingSoon  = React.lazy(() => import('Pages/ComingSoon'));

//  ROUTE PATHS
//  Export paths for remote Apps
export const routePaths = {
  welcome: '/welcome',
  creations: '/creations',
  experience: '/experience',
  skills: '/skills',
  testamonials: '/testamonials',
  comingSoon: '/comingSoon',
};


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
    name: 'creations',
    path: routePaths.creations,
    component: <Creations />,
    exact: true,
  },
  {
    name: 'experience',
    path: routePaths.experience,
    component: <Experience />,
    exact: true,
  },
  {
    name: 'skills',
    path: routePaths.skills,
    component: <Skills />,
    exact: true,
  },
  {
    name: 'testamonials',
    path: routePaths.testamonials,
    component: <Testamonials />,
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
  /* Add imported remote routes here */
];


export const routeNotFound = {
  name: 'route-not-found',
  path: '*',
  component: <NotFound />,
  exact: true,
};

export default [...localRoutes, ...remoteRoutes, routeNotFound ];