import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Styles from './ProfileContainer.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileContainer = () => {

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic" className={Styles.Btn}>
                    Aman Chandra
                </Dropdown.Toggle>

                <Dropdown.Menu className={Styles.BtnContent}>
                    <Dropdown.Item href="#/action-1" className={Styles.MenuItems}>My Profile</Dropdown.Item>
                    {/* <Dropdown.Item href="#/action-2" className={Styles.MenuItems}>Add New Profile</Dropdown.Item> */}
                    <Dropdown.Item href="#/action-3" className={Styles.MenuItems}>Account Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3" className={Styles.MenuItems}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default ProfileContainer
