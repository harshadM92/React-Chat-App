import React, { Component } from 'react';
import { Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as LoginActions from '../redux/actions/LoginAction';
import { getLoacalStorageItem } from '../utils/util';

const initialState = {
    userName: '',
    password: '',
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        if (getLoacalStorageItem('login_user_name')) {
            props.history.push('/home');
        } else {
            props.logout(props.history);
        }
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        const { userName, password } = this.state;
        this.props.login(userName, password).then((success) => {
            if (success) {
                this.props.history.push('/home');
            } else {
                console.log('false');
            }
        });
    }
    render() {
        const { userName, password } = this.state;
        return (
            <div className="container chat-login">
                <form name="form">
                    <div className="row align-self-center w-100">
                        <div className="col-6 mx-auto border p-4 d-flex flex-column">
                            <div className="text-center"><Label className="px-4 py-2 bg-success text-white my-2 font-weight-bold">Login</Label ></div>
                            <div className="my-2 d-flex">
                                <Input type="text" name="userName" value={userName} onChange={this.handleChange} placeholder="Enter UserName" />
                            </div>
                            <div className="my-2 d-flex">
                                <Input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Enter Password" />
                            </div>
                            <div className="text-center my-2"><Button color="primary" onClick={() => this.handleSubmit()} >Login</Button></div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loginObj: state.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(LoginActions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));