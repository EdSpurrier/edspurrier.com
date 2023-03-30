// host/src/App.js
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Rollbar from "./modules/Rollbar";
import AppRouter from "./Router/AppRouter";
import Head from "./modules/Head";


export const App = () => (
  <BrowserRouter>
    <Head />
    <Rollbar active={false}>
      <AppRouter />
    </Rollbar>
  </BrowserRouter>
);
export default App;