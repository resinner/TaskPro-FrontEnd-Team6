import { useAuth } from '../hooks';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  // const { isLoggedIn } = true; // delete this string after adding useAuth();

  return (isLoggedIn ? <Navigate to={redirectTo} /> : Component);
};

export default RestrictedRoute;