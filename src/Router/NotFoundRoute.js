import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routePaths from './routePaths';

const NotFoundRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(routePaths.absolutes.notFound);
  }, []);
  return null;
};

export default NotFoundRoute;
