import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import AuthLoginRedirect from '../api/azure/auth/AuthLoginRedirect';

const PrivateRoute = ({ children }) => (
  <Routes>
    <Route
      path='/*'
      element={
        <>
          <AuthenticatedTemplate>
            {children}
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <AuthLoginRedirect />
          </UnauthenticatedTemplate>
        </>
      }
    />
  </Routes>
);

export default PrivateRoute;
