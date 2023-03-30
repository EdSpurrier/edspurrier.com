import React, { useEffect, Suspense } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import useMsalAuth from '../api/azure/auth/useMsalAuth';
import PrivateRoute from './PrivateRoute';
import ScrollToTop from './ScrollToTop';
import { GlobalTheme, System } from "slaydtheme";
import useUserStore from "host/userStore";
import { AnimatePresence } from "framer-motion";
import useUserCompany from '../api/graphQL/state/useUserCompany';

import localRoutes, { routeNotFound } from './routes';
import portfolioRoutes from 'portfolio/routes';
import configuratorRoutes from 'configurator/routes';
import marketplaceRoutes from 'marketplace/routes';
import Loader from '../modules/Loader';
import routePaths from './routePaths';


const Navigation = React.lazy(() => import("nav/Navigation"));

const routes = [...localRoutes, ...portfolioRoutes, ...configuratorRoutes, ...marketplaceRoutes, routeNotFound];


const AppRouter = ({ ...props }) => {
  const { preferences, setAction, setUserMeta } = useUserStore();
  const { instance, actions, userDetails } = useMsalAuth();
  const activeAccount = instance.getActiveAccount();
  const location = useLocation();
  const navigate = useNavigate();
  const userHasCompany = activeAccount?.idTokenClaims?.companyId;
  const { state: userCompany, loading: userCompanyLoading, error: userCompanyError } = useUserCompany();

  useEffect(() => {
    if (!activeAccount) return;
    /* 
        if (userHasCompany && location.pathname === routePaths.onboarding) {
          navigate(routePaths.welcome);
        } else if (!userHasCompany && location.pathname !== routePaths.onboarding) {
          navigate(routePaths.onboarding);
        } */
  }, [location, userHasCompany]);



  useEffect(() => {
    setAction('logout', actions.logoutRedirect);
    setAction('gotoCompanyProfile', ()=>navigate(`${routePaths.marketplace}/${userDetails.companyId}`));
    setAction('gotoUserProfile', ()=>navigate(`${routePaths.marketplace}/${userDetails.companyId}`));
    setUserMeta('userName', userDetails.userName);
    setUserMeta('userEmail', userDetails.userEmail);
    setUserMeta('companyId', userDetails.companyId);
  }, [instance]);

  useEffect(() => {
    if (userCompanyLoading) return;
    if (!userCompany.data) return;
    setUserMeta('companyName', userCompany.data.myCompany.name);
  }, [userCompany, userCompanyLoading, userCompanyError]);

  
  return (
    <GlobalTheme darkMode={preferences.darkMode}>
      <ScrollToTop>
        <PrivateRoute>
          <Navigation />

          <AnimatePresence mode="wait">
            <Suspense fallback={<Loader />}>
              <Routes key={location.pathname} location={location}>
                {routes.map(route => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.component}
                    exact={route.exact}
                  />
                ))}
              </Routes>
            </Suspense>
          </AnimatePresence>
        </PrivateRoute>
      </ScrollToTop>
      <System appName={'Host'} active={true} devMode={process.env.DEVMODE === 'true'} />
    </GlobalTheme>
  )
}

AppRouter.displayName = 'AppRouter';

export default AppRouter