import React from 'react'
import BodyContent from '../Component/Body Content/BodyContent'
import Header from '../Component/Header/Header'
import SideBar from '../Component/Sidebar/SideBar'
import Styles from './index.module.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddPerson from '../Component/Add Person Form/AddPerson'
import Footer from '../Component/Footer/Footer'

const index = () => {
    return (
        <Router>
            <div className={Styles.MainContainer}    >
                <div> <Header /> </div>
                <div className={Styles.BodyContainer}>
                    <div className={Styles.SidebarContainer}> <SideBar /> </div>
                    <div className={Styles.ContentContainer}>
                        <Switch>
                            <Route path="/" exact children={<BodyContent />} />
                            <Route path="/AddNewProfile" children={<AddPerson />} />
                        </Switch>
                    </div>

                </div>
                <div> <Footer /> </div>
            </div>
        </Router>
    )
}

export default index