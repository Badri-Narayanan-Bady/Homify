import React from 'eact';
import { Route, Redirect } from 'eact-router-dom';
import { AuthContext } from './context/AuthContext';

const PrivateRoute = ({ component: Component,...rest }) => {
  const { token } = React.useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;