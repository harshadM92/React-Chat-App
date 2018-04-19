import React from 'react';
import { Switch } from 'react-router-dom'
import '../styles/App.scss';
import PrivateRoute from './common/PrivateRoute';

const Main = ({ component: Component, routes }) => (
  <div className="Main">
    {Component}
    <Switch>
      {
        routes.map((props, key) => {
          return (
            <PrivateRoute key={props.path} path={props.path} component={props.component}
              authed={props.authed} />
          );
        })
      }
    </Switch>
  </div>
);

export default Main;
