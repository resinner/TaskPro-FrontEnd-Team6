import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('private route', isLoggedIn);

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
