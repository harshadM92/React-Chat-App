import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      (!sessionStorage.getItem('login_user_name') && !rest.path === '/login') ? <Redirect to="/login" /> : <Component {...rest} {...props} />
    )}
  />
);
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
