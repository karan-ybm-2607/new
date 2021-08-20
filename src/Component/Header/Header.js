import React from 'react'
import {
    BrowserRouter as Router
} from "react-router-dom"
import Styles from './header.module.scss'
import LogoContainer from './Logo Container/LogoContainer'
import NavContainer from './Nav Container/NavContainer'
import ProfileContainer from './Profile Container/ProfileContainer'


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