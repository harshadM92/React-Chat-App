import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav } from 'reactstrap';
import UserAccount from '../UserAccount';

const initialState = {
    openNavbar: false,
}
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }
    toggleNavbar() {
        this.setState((prevState) => {
            return { openNavbar: !prevState.openNavbar }
        });
    }
    render() {
        const { openNavbar } = this.state;
        return (
            <div className="mb-4">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/home">Chattng App</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={openNavbar} navbar>
                        <Nav className="ml-auto" navbar>
                            {/* <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem> */}
                            <UserAccount />
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
};
export default NavBar;