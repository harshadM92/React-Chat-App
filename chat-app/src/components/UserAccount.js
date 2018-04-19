import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginActions from '../redux/actions/LoginAction';

const UserAccount = ({ history, logout }) => {
    const userName = sessionStorage.getItem("login_user_name");
    if (!userName) {
        return '';
    }
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                <i className="fa fa-user pr-2" aria-hidden="true"></i><span>{userName}</span>
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    Option 1
              </DropdownItem>
                <DropdownItem>
                    Option 2
              </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    <a onClick={() => logout(history, logout)} >Sign out <i className="pl-2 fa fa-sign-out" /></a>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(LoginActions, dispatch);
}
export default withRouter(connect(null, mapDispatchToProps)(UserAccount));