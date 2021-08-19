import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Styles from './NavContainer.module.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BodyContent from '../../Body Content/BodyContent';


const NavContainer = () => {
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
                                    <Link to="/AddNewProfile" className={Styles.NavItems}>Add Profile</Link>
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
