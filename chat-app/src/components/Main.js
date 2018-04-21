import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/App.scss';
import PrivateRoute from './common/PrivateRoute';
import { getSessionStorageItem } from '../utils/util';
import * as LoginActions from '../redux/actions/LoginAction';

const checkUserSession = (saveUserDetail, history) => {
  if (history.location.pathname === '/') {
    const userName = getSessionStorageItem('login_user_name') || false;
    if (userName) {
      saveUserDetail(userName);
      history.push('/home');
    } else  {
      history.push('/login');
    }
  }
}
const Main = ({ component: Component, routes, saveUserDetail, history }) => {
  checkUserSession(saveUserDetail, history);
  return (
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
  )
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(LoginActions, dispatch);
}
export default withRouter(connect(null, mapDispatchToProps)(Main));
