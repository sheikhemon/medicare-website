import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header">
                <Container>
                    <Navbar.Brand className="logo-name" to="/home">MEDICARE 🏥</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <nav className="ms-auto">
                            rgb(21, 73, 82)<NavLink className="link-style" to="/home"> Home </NavLink>
                            <NavLink className="link-style" to="/doctors"> Care </NavLink>
                            <NavLink className="link-style bg-primary" to="/support"> Support</NavLink>
                            {user?.email ? <NavLink
                                onClick={logOut} className="link-style bg-danger" to="/login">Log out</NavLink> :
                                <NavLink className="link-style bg-danger" to="/login">Login</NavLink>
                            }
                            {user.email ? <small className="text-white" > <i className="fas fa-user text-info"></i> {user.displayName} </small> : <small></small>}
                        </nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;