import React from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';
import SideBar from '../Component/Sidebar/SideBar';
import Routes from '../Routes/Routes';
import Styles from './index.module.scss';

const index = () => {
    return (
        <Router>
            <div className={Styles.MainContainer}    >
                <div> <Header />                                        </div>
                <div className={Styles.BodyContainer}>
                    <div className={Styles.SidebarContainer}> <SideBar /> </div>
                    <div className={Styles.ContentContainer}>
                        <Routes />
                    </div>
                </div>
                <div> <Footer /> </div>
            </div>
        </Router>
    )
}

export default index