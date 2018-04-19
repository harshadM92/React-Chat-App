import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ChatActions from '../redux/actions/ChatActions';

const userList = [
    {
        userName: 's123',
        name: 'smita',
        id: 1,
    },
    {
        userName: 'sh123',
        name: 'shreya',
        id: 2,
    },
    {
        userName: 'p123',
        name: 'piyu',
        id: 3,
    },
    {
        userName: 'h123',
        name: 'Harshad',
        id: 4,
    },
]
const FriendsList = ({ setChatToUser, login }) => (
    <ListGroup>
        {userList.filter(user => user.userName != login.userName).map((user, index) => {
            return (
                <ListGroupItem key={index} onClick={() => setChatToUser(user)}>
                    <div className="d-flex justify-content-between">
                        <div className="text-capitalize">{user.name}</div>
                        <div className="d-inline-flex flex-row"><i className="fa fa-whatsapp fa-2x px-2" /><i className="fa fa-circle text-success align-self-center" /></div>
                    </div>
                </ListGroupItem>
            );
        })}
    </ListGroup>
);
const matStateToProps = (state) => {
    return {
        login: state.login,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ChatActions, dispatch);
}
export default connect(matStateToProps, mapDispatchToProps)(FriendsList);