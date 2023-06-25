import { Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   const shouldRedirect = !isLoggedIn && !isRefreshing;
const shouldRedirect = false; // delete this string after adding useAuth();

  return ( shouldRedirect ? <Navigate to={redirectTo} /> : Component);
};

export default PrivateRoute;