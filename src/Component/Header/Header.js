import React from 'react'
import Styles from './header.module.scss'
import LogoContainer from './Logo Container/LogoContainer'
import NavContainer from './Nav Container/NavContainer'
import ProfileContainer from './Profile Container/ProfileContainer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BodyContent from '../Body Content/BodyContent'


const Header = () => {
    return (
        <Router>
            <div className={Styles.HeaderComponent}>
                <div className={Styles.LogoContainer}><LogoContainer /></div>
                <div className={Styles.NavContainer}><NavContainer />

                </div>
                <div className={Styles.ProfileContainer}><ProfileContainer /></div>
            </div>

        </Router>
    )

}
export default Header