import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router, Link, useHistory
} from "react-router-dom";
import Styles from './NavContainer.module.scss';


const NavContainer = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = `newPath`;
        history.push(path);
    }
    return (
        <Router>
            <div>
                <Navbar bg="" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                            <Nav className={`${Styles.NavMenu}`}>
                                <ul>
                                    <Link to="/" className={Styles.NavItems}>Home</Link>
                                    <Link to="/AddNewProfile" className={Styles.NavItems} onClick={routeChange}>Add Profile</Link>
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </Router>
    )
}

export default NavContainer
