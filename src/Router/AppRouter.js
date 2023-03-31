import React, { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { GlobalTheme, System } from "theme";
import { AnimatePresence } from "framer-motion";

import useUserStore from "host/userStore";

import Loader from 'modules/Loader';
import routes from './routes';


/* const Navigation = React.lazy(() => import("nav/Navigation")); */



const AppRouter = ({ ...props }) => {
  const { preferences } = useUserStore();
  const location = useLocation();


  return (
    <GlobalTheme darkMode={preferences.darkMode}>
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
      <System appName={'Host'} active={true} devMode={process.env.DEVMODE === 'true'} />
    </GlobalTheme>
  )

}

AppRouter.displayName = 'AppRouter';

export default AppRouter